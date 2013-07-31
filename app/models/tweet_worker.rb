  # Remember to create a migration!
class TweetWorker
  include Sidekiq::Worker

  def perform(tweet_id)
    tweet = Tweet.find(tweet_id)
    @user = tweet.user
    twitter_client.update(tweet.text)
  end

  def twitter_client
    @twitter_client ||= Twitter::Client.new(
      oauth_token: @user.oauth_token,
      oauth_token_secret: @user.oauth_secret
    )
  end

end
