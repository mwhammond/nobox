#!/usr/bin/env ruby

#gem 'autodiscover', :git => 'git://github.com/wimm/autodiscover.git'

require 'rubygems'
require 'viewpoint'
require 'kconv'
require 'autodiscover'
require 'highline/import'


include Viewpoint::EWS

class GetMail

	def get_password(prompt="Password: ")
  	ask(prompt) { |q| q.echo = false }
	end


	def pullIn

	q = get_password	

	credentials = Autodiscover::Credentials.new('mark.hammond@imperialinnovations.co.uk', q)
	client = Autodiscover::Client.new
	services = client.get_services(credentials)
	ews_url = services.ews_url
	ttl = services.ttl	
	
	puts ews_url

	puts "pulling mail"

	Viewpoint::EWS::EWS.endpoint = ews_url
	Viewpoint::EWS::EWS.set_auth 'mark.hammond@imperialinnovations.co.uk','9eDR2seH'
	inbox = Viewpoint::EWS::Folder.get_folder_by_name('Inbox')


	    items=inbox.find_items
        items.each do |item|
        email=item.to_mail
        receivers=email.to
        sender=email.from.first
        subject=email.subject
        puts subject
    	end



	end

end

getMail = GetMail.new

result = getMail.pullIn