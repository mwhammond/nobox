class TasksController < ApplicationController

  respond_to :json
  protect_from_forgery

  after_filter  :set_csrf_cookie_for_ng


  # GET /messages
  # GET /messages.json
  def index
   # GetMail.perform_async
   # puts 'launching worker'
    @tasks = Task.all
    render json: @tasks
  end


  # GET /messages/1
  # GET /messages/1.json
  def show

    @task = Task.find(params[:id])
    render json: @task
  end



  # POST /messages
  # POST /messages.json
  def create
    @task = Task.new(task_params)

      if @task.save
        render json: @task, status: :created, location: @task
      else
        render json: @task.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /messages/1
  # PATCH/PUT /messages/1.json
  def update
    @task = Task.find(params[:id])

      if @task.update_attributes(task_params)
        head :no_content
      else
        render json: @task.errors, status: :unprocessable_entity
      end
  end

  # DELETE /messages/1
  # DELETE /messages/1.json
  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    head :no_content
  end



  def task_params
      params.require(:task).permit(:text, :archive, :due, :projectId, :messages)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

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
