json.array!(@emails) do |email|
  json.extract! email, :id, :from, :to, :cc, :content, :timestamp, :projectId, :archive, :read, :type, :origId, :hash
  json.url email_url(email, format: :json)
end
