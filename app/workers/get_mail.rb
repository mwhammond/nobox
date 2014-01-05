# app/workers/get_mail.rb

#require 'rubygems'
require 'viewpoint'
require 'kconv'
require 'autodiscover'


class GetMail

include Sidekiq::Worker
include Viewpoint::EWS

sidekiq_options retry: false


#	def get_password(prompt="Password: ")
#  		ask(prompt) { |password| password.echo = false }
#	end

	def perform

		p = "9eDR2seH"
		puts "connecting"	
		ews = service_discovery(p)
		Viewpoint::EWS::EWS.endpoint = ews
		Viewpoint::EWS::EWS.set_auth 'mark.hammond@imperialinnovations.co.uk',p
		inbox = Viewpoint::EWS::Folder.get_folder_by_name('Inbox')
	    items=inbox.find_items

	    puts "adding messages to database"
        items.each do |item|
        	
        mail = Email.create(:from => item.sender.name, :subject => item.subject)		
        puts item.sender.name
        
      #  message.cc = ""
      #  message.content = item.body
      #  message.subject = item.subject
      #  message.timestamp = item.date_time_sent
      #  message.projectId = 1
      #  message.archive = false
      #  message.read = false
      #  message.type = 1

      # mail.save
      #  puts subject
	
		end

	end


	def service_discovery(p)
		puts "finding endpoint"	
		credentials = Autodiscover::Credentials.new('mark.hammond@imperialinnovations.co.uk', p)	
		client = Autodiscover::Client.new
		services = client.get_services(credentials)
		ews_url = services.ews_url
		ttl = services.ttl	
		puts "endpoint identified"
		return ews_url
	end

	
end
