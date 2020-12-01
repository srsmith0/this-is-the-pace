class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  after_create :set_date

  def set_date
    show_month = convert_month(created_at.to_date.month)
    show_day = created_at.to_date.day
    show_year = created_at.to_date.year
    update(shown_date: "#{show_month} #{show_day}, #{show_year}")
  end 

  def convert_month(month)
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
