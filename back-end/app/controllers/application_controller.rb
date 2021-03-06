class ApplicationController < ActionController::Base
  helper_method :current_user
  helper_method :logged_in?
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
    
  def current_user
      User.find_by(id: session[:user_id])
  end
  def logged_in?
      !current_user.nil?
  end
end
