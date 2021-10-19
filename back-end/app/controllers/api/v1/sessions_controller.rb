class Api::V1::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:email])
    if !!@user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
  end
end
