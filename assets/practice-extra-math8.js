/* Extra written questions so every lesson has at least 10 different ones (added Nov 2026).
   Same format as the banks in practice-math8.js. Added on top of what's already there. */
(function (add) { const B = window.PDATA.banks = window.PDATA.banks || {}; Object.keys(add).forEach(k => { B[k] = (B[k] || []).concat(add[k]); }); })({
  'u2-l2': [
    ['Which is warmer: −3°C or −11°C?', ['−3°C', '−11°C'], 0, '−3 is closer to zero, so it is warmer.'],
    { q: 'What integer is 6 more than −2?', a: 4, neg: true, why: 'Start at −2 and move 6 to the right.' }
  ],
  'u3-l1': [
    { q: 'How many cents is 0.07 of a dollar?', a: 7, unit: '¢', why: '0.07 is 7 hundredths = 7 cents.' },
    ['Which shows 5 dimes and 3 pennies?', ['$0.53', '$5.30', '$0.35'], 0, '5 tenths and 3 hundredths = 0.53.']
  ],
  'u3-l2': [
    ['Which costs more: $4.09 or $4.90?', ['$4.90', '$4.09'], 0, 'Compare the tenths: 9 tenths is more than 0 tenths.'],
    ['Which is greater: 0.6 or 0.58?', ['0.6', '0.58'], 0, '0.6 = 0.60, and 60 hundredths is more than 58.'],
    ['Gas is $1.429 at one station and $1.45 at another. Which is cheaper?', ['$1.429', '$1.45'], 0, '$1.45 = $1.450. 1.429 is less than 1.450.'],
    ['Put in order from least to greatest: 2.5, 2.05, 2.45', ['2.05, 2.45, 2.5', '2.5, 2.45, 2.05', '2.05, 2.5, 2.45'], 0, 'Write them with two places: 2.05, 2.45, 2.50.'],
    ['Which is the cheapest snack?', ['$1.95', '$2.15', '$1.99'], 0, 'All start with 1 or 2 dollars. $1.95 has the fewest cents.']
  ],
  'u3-l3': [
    { q: 'Add $4.60 + $3.75.', a: 8.35, pre: '$', why: 'Line up the decimals: 4.60 + 3.75 = 8.35.' },
    { q: 'You have $25.00 and buy a game for $19.49. How much is left?', a: 5.51, pre: '$', why: '25.00 − 19.49 = 5.51.' }
  ],
  'u7-l1': [
    { q: 'What comes next? 4, 9, 14, 19, …', a: 24, why: 'The pattern adds 5 each time.' },
    ['Which is a repeating pattern?', ['Red, blue, red, blue, red, blue', '2, 4, 8, 16', '1, 3, 6, 10'], 0, 'A repeating pattern shows the same core over and over.']
  ],
  'u7-l3': [
    { q: 'What is 5m when m = 7?', a: 35, why: '5m means 5 × m = 5 × 7 = 35.' },
    ['Which expression means "a number y minus 4"?', ['y − 4', '4 − y', '4y'], 0, '"y minus 4" starts with y and takes away 4.']
  ],
  'u7-l4': [
    { q: 'Make it balance: ? + 7 = 15', a: 8, why: '15 − 7 = 8, so 8 + 7 = 15.' },
    { q: 'Make it balance: 30 ÷ ? = 6', a: 5, why: '30 ÷ 5 = 6.' },
    { q: 'A scale has x + 5 on one side and 12 on the other. What is x?', a: 7, why: 'Take 5 off both sides: x = 7.' }
  ],
  'u8-l5': [
    ['A point is at (3, 5). Which number tells how far up?', ['5', '3'], 0, 'Across first (3), then up (5).'],
    ['How many lines of symmetry does a circle have?', ['As many as you like (endless)', '1', '4'], 0, 'Any line through the centre folds a circle into matching halves.']
  ],
  'u9-l2': [
    { q: 'How many mL are in 2.5 L?', a: 2500, unit: 'mL', why: '1 L = 1,000 mL, so 2.5 × 1,000 = 2,500 mL.' },
    ['Which is a good estimate for a mug of hot chocolate?', ['250 mL', '25 L', '2.5 mL'], 0, 'A mug holds about one cup, which is about 250 mL.']
  ],
  'u9-l4': [
    { q: 'How many faces does a triangular prism have?', a: 5, why: '2 triangles + 3 rectangles = 5 faces.' },
    ['A tent shaped like a triangle from the front and long like a box is a…', ['Triangular prism', 'Cylinder', 'Sphere'], 0, 'It has 2 triangle ends joined by rectangles.'],
    { q: 'How many vertices does a square pyramid have?', a: 5, why: '4 corners on the square base + 1 on top = 5.' }
  ],
  'u9-l5': [
    ['The net of a triangular prism has 2 triangles and how many rectangles?', ['3', '2', '4'], 0, 'Each side of the triangle joins a rectangle.'],
    ['Which net folds into a cone?', ['A circle and a fan shape (part of a circle)', 'Two circles and a rectangle', 'Six squares'], 0, 'The fan rolls into the point; the circle is the base.'],
    ['Why do pizza boxes come flat?', ['They are nets, so they stack and ship easily', 'They are cheaper to eat', 'Pizzas are flat'], 0, 'A flat net takes up less space until it is folded.'],
    ['Which shape is NOT in the net of a cube?', ['Triangle', 'Square', 'All the faces are squares'], 0, 'A cube has only square faces.']
  ],
  'u10-l1': [
    ['You time how long the microwave takes to pop popcorn. That data is…', ['First-hand', 'Second-hand'], 0, 'You collected it yourself.'],
    ['You use a chart from the Alberta government about wildfires. That data is…', ['Second-hand', 'First-hand'], 0, 'Someone else collected it.'],
    ['Why is first-hand data useful?', ['You know exactly how it was collected', 'It is always bigger', 'It is always on the internet'], 0, 'You were there, so you know how it was gathered.']
  ],
  'u10-l2': [
    ['What does the title of a graph tell you?', ['What the graph is about', 'The biggest number', 'Who made the computer'], 0, 'Always read the title first.'],
    ['A line graph goes down from left to right. The trend is…', ['Decreasing', 'Increasing', 'Staying the same'], 0, 'Going down means the values are getting smaller.']
  ],
  'u10-l3': [
    ['Which graph best shows how many students chose each pizza topping?', ['Bar graph', 'Line graph'], 0, 'Bar graphs compare groups.'],
    { q: 'A tally shows |||| |||| ||. What number is that?', a: 12, why: 'Each bundle is 5: 5 + 5 + 2 = 12.' },
    ['In a frequency table, the "frequency" is…', ['How many times something happened', 'The name of the group', 'The date'], 0, 'Frequency = how often.']
  ],
  'u10-l4': [
    ['"Most students in our class walk to school" is a…', ['Conclusion', 'Prediction'], 0, 'It says what the data already shows.'],
    ['"More students will take the bus in January when it is cold" is a…', ['Prediction', 'Conclusion'], 0, 'It guesses what will happen next.'],
    ['You surveyed 25 students instead of 5. Your conclusion is…', ['More trustworthy', 'Less trustworthy', 'Exactly the same'], 0, 'More data makes a conclusion stronger.'],
    ['Snack sales dropped the week of a field trip. A good conclusion is…', ['Fewer students were at school that week', 'Nobody likes snacks anymore', 'The store should close'], 0, 'Look for a reason in the data before deciding.']
  ],
  'u10-l5': [
    ['A bag has 3 red and 1 blue marble. Which colour are you more likely to pull?', ['Red', 'Blue', 'Equally likely'], 0, '3 out of 4 marbles are red.'],
    ['What is the chance of rolling a number less than 3 on a die?', ['2 out of 6 (1 in 3)', '3 out of 6', '1 out of 6'], 0, 'Only 1 and 2 are less than 3.'],
    { q: 'You flip a coin 40 times. About how many tails would you expect?', a: 20, why: 'Tails is 1 in 2, and half of 40 is 20.' }
  ]
});
