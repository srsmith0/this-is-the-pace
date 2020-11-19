class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  def self.set_date(post)
    show_month = Post.convert_month(post.created_at.to_date.month)
    show_day = post.created_at.to_date.day
    show_year = post.created_at.to_date.year
    "#{show_month} #{show_day}, #{show_year}"
  end 

  def self.convert_month(month)
    case month 
    when 1
      "January"
    when 2
      "February"
    when 3
      "March"
    when 4
      "April"
    when 5
      "May"
    when 6
      "June"
    when 7
      "July"
    when 8
      "August"
    when 9
      "September"
    when 10
      "October"
    when 11
      "November"
    when 12
      "December"
    else
      nil
    end 
  end

end
