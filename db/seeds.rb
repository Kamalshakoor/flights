# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
airlines = Airline.create([
  { 
    name: "United Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
  }, 
  { 
    name: "Southwest",
    image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
  },
  { 
    name: "Delta",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
  }, 
  { 
    name: "Alaska Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
  }, 
  { 
    name: "JetBlue",
    image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
  }, 
  { 
    name: "American Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
  }
])

reviews_data = [
  { title: 'Great airline', description: 'I had a lovely time.', score: 5, airline: airlines.first },
  { title: 'Good airline', description: 'I had a good experience.', score: 4, airline: airlines.first },
  { title: 'Average airline', description: 'It was an okay experience.', score: 3, airline: airlines.first },

  { title: 'Excellent airline', description: 'Fantastic service!', score: 5, airline: airlines.second },
  { title: 'Not bad', description: 'It could have been better.', score: 3, airline: airlines.second },
  { title: 'Enjoyed the flight', description: 'Pleasant experience.', score: 4, airline: airlines.second },

  { title: 'Fantastic airline', description: 'Outstanding service!', score: 5, airline: airlines.third },
  { title: 'Could be better', description: 'Some improvements needed.', score: 3, airline: airlines.third },
  { title: 'Great journey', description: 'Overall satisfied.', score: 4, airline: airlines.third },

  { title: 'Amazing airline', description: 'Highly recommended!', score: 5, airline: airlines.fourth },
  { title: 'Not the best', description: 'Needs improvement.', score: 2, airline: airlines.fourth },
  { title: 'Satisfied', description: 'Met expectations.', score: 4, airline: airlines.fourth },

  { title: 'Top-notch airline', description: 'Exceptional service!', score: 5, airline: airlines.fifth },
  { title: 'Disappointing', description: 'Did not meet expectations.', score: 2, airline: airlines.fifth },
  { title: 'Pleasant experience', description: 'Good overall.', score: 4, airline: airlines.fifth }
]

reviews_data.each do |review_data|
  Review.create(review_data)
end
