class MessagesController < ApplicationController

  respond_to :json
  protect_from_forgery

  after_filter  :set_csrf_cookie_for_ng



  # GET /messages
  # GET /messages.json
  def index
    @messages = Message.all
    render json: @messages
  end

  # GET /messages/1
  # GET /messages/1.json
  def show
    @message = Message.find(params[:id])
    render json: @message

  end



  # POST /messages
  # POST /messages.json
  def create
    @message = Message.new(message_params)

      if @message.save
        render json: @message, status: :created, location: @message
      else
        render json: @message.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /messages/1
  # PATCH/PUT /messages/1.json
  def update
    @message = Message.find(params[:id])

      if @message.update_attributes(message_params)
        head :no_content
      else
        render json: @message.errors, status: :unprocessable_entity
      end
  end

  # DELETE /messages/1
  # DELETE /messages/1.json
  def destroy
    @message = Message.find(params[:id])
    @message.destroy

    head :no_content
  end

 
 def message_params
    params.require(:message).permit(:id, :from, :to, :cc, :content, :timestamp, :projectId, :archive, :read, :type, :project)
  end

  private

  def intercept_html_requests
    redirect_to('/') if request.format == Mime::HTML
  end




  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

protected

  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end  



end
