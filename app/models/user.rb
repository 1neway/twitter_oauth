class User < ActiveRecord::Base

  def twitter_client
    @twitter_client ||= Twitter::Client.new(
      oauth_token: oauth_token,
      oauth_token_secret: oauth_secret
    )
  end

end
