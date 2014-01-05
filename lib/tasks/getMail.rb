#!/usr/bin/env ruby

#gem 'autodiscover', :git => 'git://github.com/wimm/autodiscover.git'
# create user with account details
# run script in background from controller button
# create message objects


require 'rubygems'
require 'viewpoint'
require 'kconv'
require 'autodiscover'
require 'highline/import'


include Viewpoint::EWS

class GetMail

@password = "9eDR2seH"

#	def get_password(prompt="Password: ")
#  		ask(prompt) { |password| password.echo = false }
#	end
	

	def service_discovery(password)
		puts "finding endpoint"	
		credentials = Autodiscover::Credentials.new('mark.hammond@imperialinnovations.co.uk', @password)	
		client = Autodiscover::Client.new
		services = client.get_services(credentials)
		ews_url = services.ews_url
		ttl = services.ttl	
		return ews_url
	end


	def pullIn
		puts "pulling in mail"	
		Viewpoint::EWS::EWS.endpoint = service_discovery()
		Viewpoint::EWS::EWS.set_auth 'mark.hammond@imperialinnovations.co.uk',@password
		inbox = Viewpoint::EWS::Folder.get_folder_by_name('Inbox')
	    items=inbox.find_items

        items.each do |item|

        message = Message.new		

        message.from = item.sender.name
        message.cc = ""
        message.content = item.body
        message.subject = item.subject
        message.timestamp = item.date_time_sent
        message.projectId = 1
        message.archive = false
        message.read = false
        message.type = 1

        puts subject

    end

	
end

getMail = GetMail.new

result = getMail.pullIn