3.times do |u|
  user = User.create(name: Faker::TvShows::RickAndMorty.character, 
  email: "#{u}@test.com", 
  password: "123456"
  )
  10.times do |p|
    post = user.posts.create(
      title: Faker::Cannabis.strain,
      description: Faker::Food.description,
      content: Faker::Hipster.paragraphs(number: 5),
      topic: Faker::Games::Zelda.item,
      user_name: user.name
    )
    post.update(shown_date: Post.set_date(post))
    4.times do |c|
      post.comments.create(
        author: Faker::FunnyName.two_word_name,
        content: Faker::Hipster.sentence,
      )
      end
  end
end

puts("seeded!")
