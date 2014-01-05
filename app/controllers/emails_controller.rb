class EmailsController < ApplicationController

  respond_to :json
  protect_from_forgery

  after_filter  :set_csrf_cookie_for_ng


  # GET /messages
  # GET /messages.json
  def index
   # GetMail.perform_async
   # puts 'launching worker'
    @emails = Email.all
    render json: @emails
  end


  # GET /messages/1
  # GET /messages/1.json
  def show

    @email = Email.find(params[:id])
    render json: @email
  end



  # POST /messages
  # POST /messages.json
  def create
    @email = Email.new(email_params)

      if @email.save
        render json: @email, status: :created, location: @email
      else
        render json: @email.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /messages/1
  # PATCH/PUT /messages/1.json
  def update
    @email = Email.find(params[:id])

      if @email.update_attributes(email_params)
        head :no_content
      else
        render json: @email.errors, status: :unprocessable_entity
      end
  end

  # DELETE /messages/1
  # DELETE /messages/1.json
  def destroy
    @email = Email.find(params[:id])
    @email.destroy

    head :no_content
  end



  def email_params
      params.require(:email).permit(:from, :to, :cc, :content, :timestamp, :projectId, :archive, :read, :type, :origId, :mail_hash)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
   # def set_email
   #   @email = Email.find(params[:id])
   # end

    # Never trust parameters from the scary internet, only allow the white list through.

    def intercept_html_requests
      redirect_to('/') if request.format == Mime::HTML
    end

    def set_csrf_cookie_for_ng
      cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
    end

    def verified_request?
      super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
    end  


end
