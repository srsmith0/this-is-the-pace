# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  has_many :posts, dependent: :destroy

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end