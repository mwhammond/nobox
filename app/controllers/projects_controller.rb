class ProjectsController < ApplicationController
  respond_to :json
  protect_from_forgery

  after_filter  :set_csrf_cookie_for_ng




  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
    render json: @projects
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    @project = Project.find(params[:id])

    render json: @project
  end



  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(project_params)

      if @project.save
        render json: @project, status: :created, location: @project
      else
        render json: @project.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    @project = Project.find(params[:id])

      if @project.update_attributes(project_params)
        head :no_content
      else
        render json: @club.errors, status: :unprocessable_entity
      end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project = Project.find(params[:id])
    @project.destroy

    head :no_content
  end

  def project_params
    params.require(:project).permit(:name, :id)
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
