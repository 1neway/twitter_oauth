class User < ActiveRecord::Base
  has_many :tweets
  def tweet_in(text, time)
    tweet = tweets.create!(:text => text)
    TweetWorker.perform_in(tweet.id, time)
  end

  # def tweet(text)
  #   tweet = tweets.create!(:text => text)
  #   TweetWorker.perform_async(tweet.id)
  # end

end
