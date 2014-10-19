# comment
(1..100).each do |i|
  str = ''
  if i % 3 == 0
    str << 'Fizz'
  elsif i % 5 == 0
    str << 'Buzz'
  end
  puts str.empty? ? i : str
end
