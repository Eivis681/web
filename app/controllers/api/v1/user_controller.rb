# frozen_string_literal: true

# Userio API
module Api
  module V1
    # Pagrindinis naudotoju kontroleris
    class UserController < ApplicationController
      def index
        @users = User.all
        if @users
          render json: { users: @users }
        else
          render json: { status: 500, errors: ['no users found'] }
        end
      end

      def create
        @user = User.new(user_params)
        if @user.save
          login!
          render json: { status: :created, user: @user }
        else
          render json: { status: 500, errors: @user.errors.full_messages }
        end
      end

      private

      def user_params
        params.require(:user).permit(:username, :password)
      end
    end
  end
end
