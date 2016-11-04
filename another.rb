class Fizz
  attr_accessor :foo
  
  module Buzz
    def initialize
      swag = :none
    end

    def +(this)
      swag++
    end
  end
end
