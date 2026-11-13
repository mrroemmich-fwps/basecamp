/* ============================================================
   Grade 8 Math: content for the Practice section.
   lessons: hint text and calculator note (calc: false = no calculator)
   banks:   written questions for lessons without a generator
            multiple choice  { q, o: [choices], a: index of the right one, why }
            typed answer     { q, a: number (or "text"), why, pre: '$', unit, tol, neg }
            lv: 1 easier, 3 harder (optional; Base Camp skips lv 3, Summit skips lv 1)
   vocab:   flashcards per unit, [word, meaning]
   tasks:   one real-world problem per unit, with parts
   ============================================================ */
window.PDATA = {
  course: 'Grade 8 Math',
  lessons: {
    'u1-l1': { calc: false, hint: 'Find the place: ones, tens, hundreds, then thousands, ten thousands, hundred thousands.' },
    'u1-l2': { calc: false, hint: 'Read in groups of three. Say the first group, then "thousand", then the rest.' },
    'u1-l3': { calc: false, hint: 'Compare the digits from the left. The first place that is different decides.' },
    'u1-l4': { calc: false, hint: 'Look at the digit just to the right of the place you are rounding to. 5 or more rounds up.' },
    'u1-l5': { calc: false, hint: 'Round each number to something friendly, then add or multiply the rounded numbers.' },
    'u2-l1': { calc: false, hint: 'Above zero, getting or having = positive. Below zero, owing or losing = negative.' },
    'u2-l2': { calc: false, hint: 'Numbers get bigger to the right on a number line. −2 is bigger than −8.' },
    'u2-l3': { calc: false, hint: 'Warmer means move up the thermometer (add). Colder means move down (subtract).' },
    'u2-l4': { calc: false, hint: 'If one temperature is below zero, count to zero first, then keep counting.' },
    'u2-l5': { calc: true, hint: 'Use the chart: 0°C = 32°F, 20°C = 68°F, 37°C = 98.6°F, 100°C = 212°F, 180°C ≈ 350°F.' },
    'u3-l1': { calc: false, hint: 'First place after the decimal = tenths (dimes). Second place = hundredths (cents).' },
    'u3-l2': { calc: false, hint: 'Line up the decimal points. Add a zero so both have two decimal places, then compare.' },
    'u3-l3': { calc: true, hint: 'Line up the decimal points, just like on a receipt, then add or subtract.' },
    'u3-l4': { calc: false, hint: 'Count up from the price to the amount paid, like a cashier.' },
    'u3-l5': { calc: true, hint: 'Times for "each, many of them". Divide for "split, share, each person pays".' },
    'u4-l1': { calc: false, hint: 'Multiples are the times table: 4, 8, 12, 16…' },
    'u4-l2': { calc: false, hint: 'A prime has exactly 2 factors: 1 and itself. Try dividing by 2, 3, 5 and 7.' },
    'u4-l3': { calc: false, hint: 'Bottom = how many equal parts. Top = how many you have. Multiply top and bottom by the same number for an equivalent fraction.' },
    'u4-l4': { calc: false, hint: 'Same bottom? Compare the tops. Same top? The smaller bottom means bigger pieces.' },
    'u4-l5': { calc: false, hint: 'Same denominator: add or subtract the tops, keep the bottom. Simplify if you can.' },
    'u5-l1': { calc: false, hint: 'Percent means "out of 100". Count the shaded squares.' },
    'u5-l2': { calc: false, hint: 'Percent to decimal: move the decimal 2 places left. 35% = 0.35.' },
    'u5-l3': { calc: false, hint: '½ = 0.5 = 50%, ¼ = 0.25 = 25%, ¾ = 0.75 = 75%, 1/10 = 0.1 = 10%.' },
    'u5-l4': { calc: false, hint: '10%: move the decimal one place left. 50%: half. 25%: half of a half.' },
    'u5-l5': { calc: true, hint: 'Find the discount (percent of the price), then subtract it from the price.' },
    'u5-l6': { calc: false, hint: 'Estimate: 10% off is a small amount; 50% off is half price.' },
    'u6-l1': { calc: false, hint: '60 seconds = 1 minute, 60 minutes = 1 hour, 24 hours = 1 day, 7 days = 1 week.' },
    'u6-l2': { calc: false, hint: 'After noon, subtract 12 to go from 24-hour to 12-hour time. 15:00 → 3:00 p.m.' },
    'u6-l3': { calc: false, hint: 'Hours to minutes: × 60. Minutes to hours: ÷ 60.' },
    'u6-l4': { calc: false, hint: 'Count to the next full hour, then count whole hours, then the leftover minutes.' },
    'u6-l5': { calc: true, hint: 'Pay = hours worked × hourly wage.' },
    'u7-l1': { calc: false, hint: 'Look for what changes each time and what stays the same.' },
    'u7-l2': { calc: true, hint: 'Find the rule: start at…, add… each time. Prediction = start + rule × steps.' },
    'u7-l3': { calc: false, hint: 'Put the number in place of the letter. 3n when n = 4 means 3 × 4.' },
    'u7-l4': { calc: false, hint: 'Do the same thing to both sides and the equation stays balanced.' },
    'u7-l5': { calc: false, hint: 'Do the opposite: + undoes −, × undoes ÷. Then check your answer.' },
    'u8-l1': { calc: true, hint: '1 in ≈ 2.54 cm, 1 ft ≈ 30.48 cm, 1 mi ≈ 1.6 km, 12 in = 1 ft.' },
    'u8-l2': { calc: true, hint: 'Perimeter is the distance around: add every side. Rectangle: 2 × (length + width).' },
    'u8-l3': { calc: true, hint: 'Area of a rectangle = length × width, in square units.' },
    'u8-l4': { calc: true, hint: 'Diameter = 2 × radius. Circumference ≈ 3.14 × diameter.' },
    'u8-l5': { calc: false, hint: '(x, y): go across first, then up.' },
    'u9-l1': { calc: true, hint: '1,000 g = 1 kg. 1 kg ≈ 2.2 lb.' },
    'u9-l2': { calc: true, hint: '1,000 mL = 1 L. A Canadian cup is about 250 mL.' },
    'u9-l3': { calc: true, hint: 'Volume of a box = length × width × height. 1 cm³ holds 1 mL.' },
    'u9-l4': { calc: false, hint: 'Faces are flat sides, edges are where faces meet, vertices are corners.' },
    'u9-l5': { calc: false, hint: 'A net is the flat pattern you would get if you unfolded the box.' },
    'u10-l1': { calc: false, hint: 'You collected it yourself = first-hand. Someone else collected it = second-hand.' },
    'u10-l2': { calc: false, hint: 'Read the title, the labels and the scale before you read the bars.' },
    'u10-l3': { calc: true, hint: 'Bar graph to compare groups. Line graph to show change over time.' },
    'u10-l4': { calc: false, hint: 'A conclusion says what the data shows. A prediction guesses what will happen next.' },
    'u10-l5': { calc: false, hint: 'Probability = favourable outcomes ÷ all possible outcomes.' }
  },

  banks: {
    'u1-l2': [
      { q: 'Write <strong>forty-six thousand, two hundred eight</strong> in numerals.', a: 46208, why: '46 thousand, then 208.' },
      { q: 'Write <strong>seven hundred thousand, fifty</strong> in numerals.', a: 700050, why: 'The zeros hold the empty places: 700,050.' },
      { q: 'Write <strong>ninety thousand, nine</strong> in numerals.', a: 90009, why: '90 thousand and 9 ones: 90,009.' },
      { q: 'Write <strong>one hundred twelve thousand, four hundred</strong> in numerals.', a: 112400, why: '112 thousand and 400: 112,400.' },
      { q: 'How do you say <strong>305,040</strong>?', o: ['Three hundred five thousand forty', 'Three hundred fifty thousand four hundred', 'Thirty thousand five hundred forty'], a: 0, why: '305 thousand, then 040 (forty).' },
      { q: 'How do you say <strong>18,600</strong>?', o: ['Eighteen thousand six hundred', 'One hundred eighty-six', 'Eighteen hundred sixty'], a: 0, why: '18 thousand, then 600.' },
      { q: 'A cheque for <strong>$2,475</strong> must be written in words. Which is right?', o: ['Two thousand four hundred seventy-five dollars', 'Twenty-four seventy-five dollars', 'Two hundred forty-seven dollars'], a: 0, why: '2 thousand, 475.' },
      { q: 'Write <strong>six hundred thousand</strong> in numerals.', a: 600000, why: '600 thousand: 600,000.', lv: 1 },
      { q: 'Which numeral matches <strong>"eighty thousand, eight hundred eight"</strong>?', o: ['80,808', '88,008', '80,880'], a: 0, why: '80 thousand and 808.', lv: 3 }
    ],
    'u1-l5': [
      { q: 'Jordan adds <strong>4,890 + 2,105</strong> and the calculator shows <strong>2,594</strong>. Does that make sense?', o: ['Yes', 'No, it should be about 7,000'], a: 1, why: '5,000 + 2,000 ≈ 7,000. The real answer is 6,995.' },
      { q: 'Estimate <strong>398 + 512</strong> by rounding each number to the nearest hundred.', a: 900, why: '400 + 500 = 900.' },
      { q: 'Estimate <strong>2,980 − 1,020</strong> by rounding each to the nearest thousand.', a: 2000, why: '3,000 − 1,000 = 2,000.' },
      { q: 'A calculator says <strong>48 × 21 = 108</strong>. Does that make sense?', o: ['Yes', 'No, it should be about 1,000'], a: 1, why: '50 × 20 = 1,000. The real answer is 1,008.' },
      { q: 'Estimate <strong>19 × 31</strong> by rounding both numbers to the nearest ten.', a: 600, why: '20 × 30 = 600.' },
      { q: 'You buy items for $9.85, $20.10 and $4.95. About how much is the total?', o: ['About $35', 'About $350', 'About $3.50'], a: 0, why: '$10 + $20 + $5 = $35.' },
      { q: 'A class of 28 students each pays $12 for a field trip. A calculator shows $3,360. Does it make sense?', o: ['Yes', 'No, it should be about $300'], a: 1, why: '30 × $10 = $300. The real total is $336 (an extra 0 was typed).', lv: 3 },
      { q: 'Estimate <strong>51 + 49</strong>.', a: 100, why: '50 + 50 = 100.', lv: 1 }
    ],
    'u2-l1': [
      { q: 'Write an integer for <strong>15 degrees below zero</strong>.', a: -15, neg: true, why: 'Below zero is negative.' },
      { q: 'Write an integer for <strong>a $40 deposit</strong>.', a: 40, why: 'Money coming in is positive.' },
      { q: 'Write an integer for <strong>owing $25</strong>.', a: -25, neg: true, why: 'Money owed is negative.' },
      { q: 'Write an integer for <strong>300 m above sea level</strong>.', a: 300, why: 'Above sea level is positive.' },
      { q: 'A hockey player is <strong>minus 3</strong> for the game. Which integer?', o: ['+3', '−3'], a: 1, why: 'Minus means negative.' },
      { q: 'Which situation is a <strong>negative</strong> number?', o: ['A diver 10 m below the surface', 'A plane 10 km up', 'Earning $10'], a: 0, why: 'Below the surface is negative.' },
      { q: 'Which is <strong>not</strong> an integer?', o: ['−7', '0', '2.5'], a: 2, why: 'Integers are whole numbers, positive, negative or zero.' },
      { q: 'Write an integer for <strong>losing 6 yards</strong> on a football play.', a: -6, neg: true, why: 'A loss is negative.', lv: 3 }
    ],
    'u2-l2': [
      { q: 'Which is colder?', o: ['−7°C', '−3°C'], a: 0, why: '−7 is farther left on the number line.' },
      { q: 'Which is greater?', o: ['−12', '−4'], a: 1, why: '−4 is closer to zero, so it is farther right.' },
      { q: 'Order from least to greatest: <strong>3, −5, 0, −1</strong>', o: ['−5, −1, 0, 3', '−1, −5, 0, 3', '0, −1, 3, −5'], a: 0, why: 'Start with the number farthest left: −5.' },
      { q: 'Which is the warmest?', o: ['−18°C', '−2°C', '−9°C'], a: 1, why: '−2 is highest on the thermometer.' },
      { q: 'What integer is halfway between −4 and 4?', a: 0, why: 'Zero is in the middle.' },
      { q: 'What integer is 5 less than 2?', a: -3, neg: true, why: 'Start at 2 and move 5 to the left: −3.' },
      { q: 'Which is the coldest?', o: ['−25°C', '−30°C', '−5°C'], a: 1, why: 'With negatives, the bigger the number after the minus sign, the colder.', lv: 3 },
      { q: 'Order from greatest to least: <strong>−2, 6, −8, 1</strong>', o: ['6, 1, −2, −8', '−8, −2, 1, 6', '6, 1, −8, −2'], a: 0, why: 'Greatest is farthest right: 6.', lv: 3 }
    ],
    'u2-l5': [
      { q: 'Use the chart: water freezes at 0°C. What is that in °F?', a: 32, unit: '°F', why: 'The chart says 0°C = 32°F.' },
      { q: 'Use the chart: water boils at 100°C. What is that in °F?', a: 212, unit: '°F', why: 'The chart says 100°C = 212°F.' },
      { q: 'A recipe says bake at <strong>350°F</strong>. About what is that in °C?', a: 180, tol: 2, unit: '°C', why: 'The chart shows 350°F ≈ 180°C.' },
      { q: 'Room temperature is 20°C. What is that in °F?', a: 68, unit: '°F', why: 'The chart says 20°C = 68°F.' },
      { q: 'At what temperature are Celsius and Fahrenheit the same?', a: -40, neg: true, why: '−40°C = −40°F.' },
      { q: 'Normal body temperature is about…', o: ['37°C or 98.6°F', '98.6°C', '37°F'], a: 0, why: 'In °F, 98.6 is normal. In °C, 37.' },
      { q: 'An American weather report says 32°F. What will you see outside?', o: ['Water freezing', 'People swimming', 'Water boiling'], a: 0, why: '32°F = 0°C, the freezing point.' },
      { q: 'A thermometer in °F reads 68. Is it hot, comfortable or freezing?', o: ['Comfortable, room temperature', 'Freezing', 'Very hot'], a: 0, why: '68°F = 20°C.', lv: 1 }
    ],
    'u3-l1': [
      { q: 'In <strong>$4.75</strong>, how many dimes are shown by the tenths digit?', a: 7, why: 'The first digit after the decimal is tenths (dimes).' },
      { q: 'Write <strong>3 dollars, 2 dimes and 6 cents</strong> as a decimal amount.', a: 3.26, pre: '$', why: '3 + 0.2 + 0.06 = 3.26.' },
      { q: 'What is the value of the 9 in <strong>0.39</strong>?', o: ['9 tenths', '9 hundredths', '9 ones'], a: 1, why: 'The second place after the decimal is hundredths.' },
      { q: 'Write <strong>seven tenths</strong> as a decimal.', a: 0.7, why: '7 tenths = 0.7.' },
      { q: 'Write <strong>15 hundredths</strong> as a decimal.', a: 0.15, why: '15 hundredths = 0.15.' },
      { q: 'Which equals <strong>$2.50</strong>?', o: ['2 dollars and 5 dimes', '2 dollars and 5 cents', '25 dollars'], a: 0, why: '0.50 is 5 tenths, or 5 dimes.' },
      { q: 'Write <strong>4 + 0.6 + 0.08</strong> as one decimal.', a: 4.68, why: '4 ones, 6 tenths, 8 hundredths.', lv: 3 },
      { q: 'Cash totals in Canada round to the nearest 5¢. What does $3.42 round to?', a: 3.4, pre: '$', why: '3.42 is closer to 3.40 than 3.45.', lv: 3 }
    ],
    'u3-l3': [
      { q: 'Chips $3.49 + juice $2.25 + granola $4.80. What is the total?', a: 10.54, pre: '$', why: 'Line up the decimals: 3.49 + 2.25 + 4.80 = 10.54.' },
      { q: 'You have <strong>$15.00</strong> and spend <strong>$10.54</strong>. How much is left?', a: 4.46, pre: '$', why: '15.00 − 10.54 = 4.46.' },
      { q: 'Add <strong>$12.99 + $5.50</strong>.', a: 18.49, pre: '$', why: '12.99 + 5.50 = 18.49.' },
      { q: 'A hoodie costs $34.75. You have $50.00. How much is left?', a: 15.25, pre: '$', why: '50.00 − 34.75 = 15.25.' },
      { q: 'Add <strong>$7.25 + $1.75</strong>.', a: 9, pre: '$', why: '7.25 + 1.75 = 9.00.', lv: 1 },
      { q: 'Lunch: burger $8.95, fries $3.45, drink $2.10. What is the total?', a: 14.5, pre: '$', why: '8.95 + 3.45 + 2.10 = 14.50.' },
      { q: 'Your budget is $60.00. You spent $18.40 and $27.85. How much is left?', a: 13.75, pre: '$', why: '18.40 + 27.85 = 46.25, and 60.00 − 46.25 = 13.75.', lv: 3 },
      { q: 'Subtract <strong>$20.00 − $6.30</strong>.', a: 13.7, pre: '$', why: '20.00 − 6.30 = 13.70.' }
    ],
    'u4-l3': [
      { q: 'In the fraction <strong>3/4</strong>, what is the denominator?', a: 4, why: 'The denominator is the bottom number: how many equal parts.' },
      { q: 'Which fraction is equivalent to <strong>1/2</strong>?', o: ['2/4', '1/4', '2/3'], a: 0, why: 'Multiply top and bottom by 2.' },
      { q: 'Simplify <strong>6/8</strong>.', o: ['3/4', '2/3', '1/2'], a: 0, why: 'Divide top and bottom by 2.' },
      { q: 'How many halves are in <strong>2 1/2</strong>?', a: 5, why: '2 wholes = 4 halves, plus 1 half = 5 halves (5/2).' },
      { q: 'Write <strong>7/4</strong> as a mixed number.', o: ['1 3/4', '7 1/4', '1 4/7'], a: 0, why: '4/4 makes 1 whole, with 3/4 left.' },
      { q: 'Complete: <strong>2/3 = ?/9</strong>', a: 6, why: 'Multiply top and bottom by 3: 6/9.' },
      { q: 'A pizza is cut into 8 slices. You eat 3. What fraction did you eat?', o: ['3/8', '8/3', '5/8'], a: 0, why: '3 of 8 equal parts.', lv: 1 },
      { q: 'Write <strong>3 1/3</strong> as an improper fraction.', o: ['10/3', '4/3', '7/3'], a: 0, why: '3 wholes = 9/3, plus 1/3 = 10/3.', lv: 3 }
    ],
    'u6-l1': [
      { q: 'How many hours are in a week?', a: 168, why: '24 × 7 = 168.' },
      { q: 'How many minutes are in 3 hours?', a: 180, why: '3 × 60 = 180.' },
      { q: 'How many years are in a century?', a: 100, why: 'A century is 100 years.' },
      { q: 'How many seconds are in 2 minutes?', a: 120, why: '2 × 60 = 120.' },
      { q: 'How many months are in 3 years?', a: 36, why: '3 × 12 = 36.' },
      { q: 'How many years are in a millennium?', a: 1000, why: 'A millennium is 1,000 years.' },
      { q: 'How many days are in 4 weeks?', a: 28, why: '4 × 7 = 28.', lv: 1 },
      { q: 'How many hours are in 3 days?', a: 72, why: '3 × 24 = 72.' },
      { q: 'About how many weeks are in 2 years?', a: 104, why: '2 × 52 = 104.', lv: 3 }
    ],
    'u7-l1': [
      { q: 'What comes next? <strong>5, 10, 15, 20, …</strong>', a: 25, why: 'Add 5 each time.' },
      { q: 'Calendar dates in one column go <strong>3, 10, 17, 24</strong>. What is the pattern?', o: ['Add 7', 'Add 10', 'Double'], a: 0, why: 'Each week is 7 days later.' },
      { q: 'Which is a growing pattern?', o: ['Red, blue, red, blue', '2, 4, 6, 8', 'Mon, Tue, Mon, Tue'], a: 1, why: 'It grows by the same amount each time.' },
      { q: 'What comes next? <strong>1, 2, 4, 8, …</strong>', a: 16, why: 'Double each time.' },
      { q: 'What comes next? <strong>50, 45, 40, 35, …</strong>', a: 30, why: 'Subtract 5 each time.' },
      { q: 'A snowflake has 6 matching arms. That is a pattern of…', o: ['Symmetry', 'Subtraction', 'Doubling'], a: 0, why: 'The arms match, so it is symmetrical.' },
      { q: 'What comes next? <strong>3, 7, 11, 15, …</strong>', a: 19, why: 'Add 4 each time.', lv: 3 },
      { q: 'What comes next? <strong>2, 4, 6, …</strong>', a: 8, why: 'Add 2 each time.', lv: 1 }
    ],
    'u7-l3': [
      { q: 'Pizza costs $14 each. Which shows the cost of <em>p</em> pizzas?', o: ['14 + p', '14p', 'p − 14'], a: 1, why: '14p means 14 × p.' },
      { q: 'If cost = <strong>4 + 2k</strong>, what does a 10 km taxi ride cost?', a: 24, pre: '$', why: '4 + 2 × 10 = 24.' },
      { q: 'You earn $16 an hour. Pay = <strong>16h</strong>. What is the pay for 5 hours?', a: 80, pre: '$', why: '16 × 5 = 80.' },
      { q: 'Tickets cost $12 each. Total = <strong>12n</strong>. What is the total for 4 people?', a: 48, pre: '$', why: '12 × 4 = 48.' },
      { q: 'What is <strong>3n + 1</strong> when <em>n</em> = 6?', a: 19, why: '3 × 6 + 1 = 19.' },
      { q: 'Which expression means "5 more than a number <em>x</em>"?', o: ['x + 5', '5x', 'x − 5'], a: 0, why: '"More than" means add.' },
      { q: 'What is <strong>2b − 3</strong> when <em>b</em> = 10?', a: 17, why: '2 × 10 − 3 = 17.', lv: 3 },
      { q: 'What is <strong>n + 8</strong> when <em>n</em> = 2?', a: 10, why: '2 + 8 = 10.', lv: 1 }
    ],
    'u7-l4': [
      { q: 'If you add 4 to one side of an equation, what must you do to the other side?', o: ['Add 4', 'Subtract 4', 'Nothing'], a: 0, why: 'Do the same to both sides.' },
      { q: 'Which equation is balanced?', o: ['6 + 2 = 9', '10 − 3 = 7', '4 × 2 = 6'], a: 1, why: '10 − 3 really is 7.' },
      { q: 'A scale has <strong>x + 3</strong> on one side and <strong>8</strong> on the other. What is <em>x</em>?', a: 5, why: 'Take 3 off both sides: x = 5.' },
      { q: 'Which is balanced?', o: ['3 × 5 = 15', '12 ÷ 3 = 5', '7 + 7 = 15'], a: 0, why: '3 × 5 is 15.' },
      { q: 'Make it balance: <strong>9 + ? = 14</strong>', a: 5, why: '14 − 9 = 5.' },
      { q: 'Make it balance: <strong>? − 6 = 10</strong>', a: 16, why: '10 + 6 = 16.' },
      { q: 'Make it balance: <strong>4 × ? = 28</strong>', a: 7, why: '28 ÷ 4 = 7.', lv: 3 },
      { q: 'Make it balance: <strong>2 + ? = 5</strong>', a: 3, why: '5 − 2 = 3.', lv: 1 }
    ],
    'u8-l5': [
      { q: 'In the ordered pair <strong>(4, 2)</strong>, which number tells how far across?', o: ['4', '2'], a: 0, why: 'Across (x) comes first, then up (y).' },
      { q: 'Flipping a shape over a line is called a…', o: ['Translation', 'Reflection', 'Rotation'], a: 1, why: 'A flip is a reflection.' },
      { q: 'Sliding a shape without turning it is a…', o: ['Translation', 'Reflection', 'Rotation'], a: 0, why: 'A slide is a translation.' },
      { q: 'How many lines of symmetry does a square have?', a: 4, why: 'Up-down, side-to-side and both diagonals.' },
      { q: 'Which shape tessellates a floor with no gaps?', o: ['Circle', 'Square', 'Star'], a: 1, why: 'Squares fit together like floor tiles.' },
      { q: 'A bed corner is at (1, 1). It slides 2 squares right. Where is that corner now?', o: ['(3, 1)', '(1, 3)', '(2, 2)'], a: 0, why: 'Right changes the first number: 1 + 2 = 3.' },
      { q: 'A rectangle (not a square) has how many lines of symmetry?', a: 2, why: 'Only up-down and side-to-side.', lv: 3 },
      { q: 'Turning a shape around a point is a…', o: ['Rotation', 'Reflection'], a: 0, why: 'A turn is a rotation.', lv: 1 }
    ],
    'u9-l2': [
      { q: 'How many mL are in <strong>3 L</strong>?', a: 3000, unit: 'mL', why: '3 × 1,000 = 3,000.' },
      { q: 'A 2 L jug fills how many 250 mL glasses?', a: 8, why: '2,000 ÷ 250 = 8.' },
      { q: 'A recipe needs 2 cups of milk. About how many mL is that?', a: 500, unit: 'mL', why: '2 × 250 = 500.' },
      { q: 'Which holds the most?', o: ['750 mL', '0.5 L', '1.2 L'], a: 2, why: '1.2 L = 1,200 mL.' },
      { q: 'How many litres is <strong>4,500 mL</strong>?', a: 4.5, unit: 'L', why: '4,500 ÷ 1,000 = 4.5.' },
      { q: 'A mechanic needs 4.5 L of oil. Bottles hold 946 mL. How many bottles must they buy?', a: 5, why: '4,500 ÷ 946 ≈ 4.8, so buy 5.', lv: 3 },
      { q: 'How many mL are in <strong>1 L</strong>?', a: 1000, unit: 'mL', why: '1 L = 1,000 mL.', lv: 1 },
      { q: 'You drink four 500 mL bottles of water. How many litres is that?', a: 2, unit: 'L', why: '4 × 500 = 2,000 mL = 2 L.' }
    ],
    'u9-l4': [
      { q: 'A can of soup is shaped like a…', o: ['Cone', 'Cylinder', 'Cube'], a: 1, why: 'Two circle faces and a curved side.' },
      { q: 'How many faces does a cereal box have?', a: 6, why: 'A rectangular prism has 6 faces.' },
      { q: 'How many edges does a cube have?', a: 12, why: 'A cube has 12 edges.' },
      { q: 'How many vertices (corners) does a cube have?', a: 8, why: 'A cube has 8 corners.' },
      { q: 'Which has no edges and no vertices?', o: ['Sphere', 'Cube', 'Cone'], a: 0, why: 'A sphere is one smooth curved surface.' },
      { q: 'A traffic cone has how many flat faces?', a: 1, why: 'One circle on the bottom, plus a curved surface.' },
      { q: 'A basketball is a…', o: ['Sphere', 'Cylinder', 'Prism'], a: 0, why: 'It is round in every direction.', lv: 1 },
      { q: 'A die and a shoebox both have 6 faces, 12 edges and how many vertices?', a: 8, why: 'Both are prisms with 8 corners.', lv: 3 }
    ],
    'u9-l5': [
      { q: 'How many squares are in the net of a cube?', a: 6, why: 'A cube has 6 faces.' },
      { q: 'The net of a cylinder has 2 circles and a…', o: ['Triangle', 'Rectangle', 'Hexagon'], a: 1, why: 'Peel the label off a can and it is a rectangle.' },
      { q: 'A net is…', o: ['A flat pattern that folds into a 3-D object', 'A 3-D object', 'A type of graph'], a: 0, why: 'Unfold a box and you have its net.' },
      { q: 'Who uses nets on the job?', o: ['Packaging designers', 'Bus drivers', 'Lifeguards'], a: 0, why: 'They design boxes from flat sheets.' },
      { q: 'The net of a square pyramid has 1 square and how many triangles?', a: 4, why: 'One triangle for each side of the square base.', lv: 3 },
      { q: 'A cross shape made of 6 squares folds into a…', o: ['Cube', 'Cylinder', 'Cone'], a: 0, why: '6 square faces make a cube.', lv: 1 },
      { q: 'A shoebox net has how many rectangles?', a: 6, why: 'A rectangular prism has 6 rectangular faces.' }
    ],
    'u10-l1': [
      { q: 'You survey your class about their favourite store item. That data is…', o: ['First-hand', 'Second-hand'], a: 0, why: 'You collected it yourself.' },
      { q: 'You look up Alberta\'s population on Statistics Canada. That data is…', o: ['First-hand', 'Second-hand'], a: 1, why: 'Someone else collected it.' },
      { q: 'You count cars passing the school for 10 minutes. That data is…', o: ['First-hand', 'Second-hand'], a: 0, why: 'You counted them.' },
      { q: 'A news article says 60% of teens have a part-time job. That data is…', o: ['First-hand', 'Second-hand'], a: 1, why: 'It came from someone else.' },
      { q: 'Which is the best way to find out how long your bus ride takes?', o: ['Time it yourself for a week', 'Guess', 'Ask someone in another town'], a: 0, why: 'First-hand measuring is most accurate here.' },
      { q: 'Which is the best source for Canada\'s unemployment rate?', o: ['Statistics Canada', 'A survey of your friends', 'A video comment'], a: 0, why: 'It is the official national source.' },
      { q: 'Measuring your plant\'s height every day is…', o: ['First-hand data', 'Second-hand data'], a: 0, why: 'You measured it.', lv: 1 }
    ],
    'u10-l2': [
      { q: '<table class="fdp"><tr><th>Day</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th></tr><tr><td>Snacks sold</td><td>12</td><td>18</td><td>9</td><td>15</td></tr></table>Which day sold the most snacks?', o: ['Monday', 'Tuesday', 'Thursday'], a: 1, why: '18 is the highest.' },
      { q: '<table class="fdp"><tr><th>Day</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th></tr><tr><td>Snacks sold</td><td>12</td><td>18</td><td>9</td><td>15</td></tr></table>How many snacks were sold in total?', a: 54, why: '12 + 18 + 9 + 15 = 54.' },
      { q: '<table class="fdp"><tr><th>Day</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th></tr><tr><td>Snacks sold</td><td>12</td><td>18</td><td>9</td><td>15</td></tr></table>How many more snacks sold on Tuesday than Wednesday?', a: 9, why: '18 − 9 = 9.' },
      { q: 'What should you read first on any graph?', o: ['The title and labels', 'The tallest bar', 'The colours'], a: 0, why: 'They tell you what the graph is about.' },
      { q: 'A bar graph\'s scale goes up by 5. A bar stops halfway between 20 and 25. About what is its value?', a: 22.5, tol: 0.6, why: 'Halfway between 20 and 25 is 22.5.', lv: 3 },
      { q: 'A line on a graph keeps going up from left to right. The trend is…', o: ['Increasing', 'Decreasing', 'Staying the same'], a: 0, why: 'Going up means increasing.' },
      { q: 'Which part of a graph tells you what each line or step is worth?', o: ['The scale', 'The title', 'The colour'], a: 0, why: 'The scale shows the value of each step.', lv: 1 }
    ],
    'u10-l3': [
      { q: '<table class="fdp"><tr><th>Way to school</th><th>Tally</th></tr><tr><td>Bus</td><td><s>||||</s> <s>||||</s> |||</td></tr><tr><td>Car</td><td><s>||||</s> ||</td></tr><tr><td>Walk</td><td>||||</td></tr></table>How many students take the bus?', a: 13, why: 'Two groups of 5 plus 3 = 13.' },
      { q: '<table class="fdp"><tr><th>Way to school</th><th>Tally</th></tr><tr><td>Bus</td><td><s>||||</s> <s>||||</s> |||</td></tr><tr><td>Car</td><td><s>||||</s> ||</td></tr><tr><td>Walk</td><td>||||</td></tr></table>How many students were surveyed in all?', a: 24, why: '13 + 7 + 4 = 24.' },
      { q: 'Which graph best compares favourite snacks in the class?', o: ['Bar graph', 'Line graph'], a: 0, why: 'Bar graphs compare groups.' },
      { q: 'Which graph best shows your height from age 5 to 14?', o: ['Bar graph', 'Line graph'], a: 1, why: 'Line graphs show change over time.' },
      { q: 'In a tally chart, a bundle of 4 lines with a line across it stands for…', a: 5, why: 'Tallies are grouped in fives.' },
      { q: 'In a spreadsheet, where do you go to make a chart from a table?', o: ['Insert → Chart', 'File → Print', 'Edit → Undo'], a: 0, why: 'Select the data, then Insert → Chart.' },
      { q: 'A frequency table shows…', o: ['How many times each answer happened', 'The colour of each bar'], a: 0, why: 'Frequency means how often.', lv: 1 }
    ],
    'u10-l4': [
      { q: 'Chocolate sold the most in November. "Chocolate is the most popular item" is a…', o: ['Conclusion', 'Prediction'], a: 0, why: 'It says what the data shows.' },
      { q: '"Chocolate will sell out first in December" is a…', o: ['Conclusion', 'Prediction'], a: 1, why: 'It guesses what will happen next.' },
      { q: 'You survey 3 friends and they all love one game. Can you say the whole school loves it?', o: ['Yes', 'No, the sample is too small'], a: 1, why: '3 people can\'t speak for everyone.' },
      { q: 'Sales went up every week for 5 weeks. A fair prediction is…', o: ['Sales will probably go up again', 'Sales will drop to zero', 'Sales will definitely double'], a: 0, why: 'A trend helps you predict, but it is not a guarantee.' },
      { q: 'Why might December sales be different from November?', o: ['The holidays change what people buy', 'Months are all the same'], a: 0, why: 'Events and seasons change data.' },
      { q: 'Which makes a conclusion stronger?', o: ['More data from more people', 'Asking only your best friend'], a: 0, why: 'More data gives a clearer picture.', lv: 1 }
    ],
    'u10-l5': [
      { q: 'What is the chance of flipping heads on a coin?', o: ['1 in 2', '1 in 6', '2 in 1'], a: 0, why: '2 sides, 1 of them heads.' },
      { q: 'What is the chance of rolling a 4 on a regular die?', o: ['1 in 6', '1 in 4', '4 in 6'], a: 0, why: '6 sides, one of them is 4.' },
      { q: 'You flip a coin 10 times and get 7 heads. What does that show?', o: ['Results vary in a small experiment', 'The coin is broken', 'Heads always wins'], a: 0, why: 'Small experiments vary a lot.' },
      { q: 'If you flip a coin 500 times, about how many heads would you expect?', a: 250, tol: 1, why: 'About half: 500 ÷ 2 = 250.' },
      { q: 'If you roll a die 60 times, about how many 6s would you expect?', a: 10, why: '60 ÷ 6 = 10.' },
      { q: 'Which gives results closer to what you expect?', o: ['10 trials', '500 trials'], a: 1, why: 'More trials usually means closer to expected.' },
      { q: 'What is the chance of rolling an even number on a die?', o: ['3 in 6 (1 in 2)', '1 in 6', '2 in 6'], a: 0, why: '2, 4 and 6 are even.', lv: 3 }
    ]
  },

  vocab: {
    1: [['Place value', 'What a digit is worth because of where it is in the number.'], ['Digit', 'One of the symbols 0 to 9.'], ['Numeral', 'A number written with digits, like 4,520.'], ['Round', 'Change a number to a nearby, friendlier number.'], ['Estimate', 'A close guess using rounded numbers.'], ['Greater than (>)', 'Bigger than. 9 > 4.'], ['Less than (<)', 'Smaller than. 4 < 9.'], ['Period', 'A group of three digits: ones, thousands, millions.']],
    2: [['Integer', 'A positive or negative whole number, or zero.'], ['Positive', 'Above zero.'], ['Negative', 'Below zero, written with a minus sign: −5.'], ['Number line', 'A line showing numbers in order. Bigger numbers are to the right.'], ['Temperature', 'How hot or cold something is.'], ['Celsius (°C)', 'The temperature scale used in Canada. Water freezes at 0°C.'], ['Fahrenheit (°F)', 'The temperature scale used in the U.S. Water freezes at 32°F.'], ['Sea level', 'The height of the ocean surface, used as zero for elevation.']],
    3: [['Decimal point', 'The dot that separates whole numbers from parts of a whole.'], ['Tenths', 'The first place after the decimal point. Dimes.'], ['Hundredths', 'The second place after the decimal point. Cents.'], ['Receipt', 'A record of what you bought and paid.'], ['Change', 'The money you get back when you pay more than the price.'], ['Total', 'The amount when everything is added.'], ['Budget', 'A plan for spending money.'], ['Unit price', 'The cost of one item.']],
    4: [['Multiple', 'A number in the times table. Multiples of 3: 3, 6, 9…'], ['Factor', 'A number that divides evenly into another. 4 is a factor of 12.'], ['Prime', 'A number with exactly 2 factors: 1 and itself.'], ['Composite', 'A number with more than 2 factors.'], ['Numerator', 'The top of a fraction: how many parts you have.'], ['Denominator', 'The bottom of a fraction: how many equal parts.'], ['Equivalent fractions', 'Fractions that are worth the same: 1/2 = 2/4.'], ['Mixed number', 'A whole number and a fraction: 2 1/2.']],
    5: [['Percent (%)', 'Out of 100.'], ['Discount', 'The amount taken off the price.'], ['Sale price', 'The price after the discount.'], ['Benchmark', 'A common, easy number to compare with: ½, ¼, 10%.'], ['Decimal', 'A number with a decimal point, like 0.25.'], ['Mental math', 'Working it out in your head.'], ['Original price', 'The price before any discount.'], ['Reasonable', 'An answer that makes sense.']],
    6: [['Minute', '60 seconds.'], ['Hour', '60 minutes.'], ['24-hour clock', 'Time from 00:00 to 23:59. 15:00 is 3:00 p.m.'], ['a.m. / p.m.', 'Before noon / after noon.'], ['Elapsed time', 'How much time has passed.'], ['Timecard', 'A record of when a worker starts and finishes.'], ['Wage', 'Money paid for each hour of work.'], ['Century', '100 years.']],
    7: [['Pattern', 'Something that repeats or grows in a predictable way.'], ['Pattern rule', 'Where a pattern starts and what to do each time.'], ['Variable', 'A letter that stands for a number.'], ['Expression', 'Numbers and letters with operations, like 3n + 2.'], ['Equation', 'A math sentence with an equals sign. Both sides are balanced.'], ['Solve', 'Find the value of the variable.'], ['Opposite operation', 'The one that undoes another: + and −, × and ÷.'], ['Table of values', 'A table that shows how a pattern changes.']],
    8: [['Perimeter', 'The distance around a shape.'], ['Area', 'The space inside a shape, in square units.'], ['Radius', 'From the centre of a circle to the edge.'], ['Diameter', 'All the way across a circle, through the centre.'], ['Circumference', 'The distance around a circle.'], ['Metric', 'mm, cm, m, km.'], ['Imperial', 'Inches, feet, yards, miles.'], ['Tessellation', 'Shapes that cover a surface with no gaps.']],
    9: [['Mass', 'How heavy something is, in grams or kilograms.'], ['Capacity', 'How much a container holds, in mL or L.'], ['Volume', 'The space an object takes up: length × width × height.'], ['Cubic centimetre (cm³)', 'A cube 1 cm on each side. It holds 1 mL.'], ['Face', 'A flat side of a 3-D object.'], ['Edge', 'Where two faces meet.'], ['Vertex', 'A corner. Plural: vertices.'], ['Net', 'A flat pattern that folds into a 3-D object.']],
    10: [['Data', 'Information that is collected.'], ['First-hand data', 'Data you collect yourself.'], ['Second-hand data', 'Data someone else collected.'], ['Tally chart', 'A chart that counts with marks in groups of 5.'], ['Frequency', 'How many times something happens.'], ['Bar graph', 'A graph that compares groups.'], ['Line graph', 'A graph that shows change over time.'], ['Probability', 'How likely something is to happen.']]
  },

  tasks: {
    1: { title: 'Arena Attendance', story: 'The Oilers sell tickets for 3 home games: <strong>17,842</strong>, <strong>18,347</strong> and <strong>16,905</strong> fans.', parts: [
      { q: 'Round each attendance to the nearest thousand and add them for an estimate.', a: 53000, hint: '18,000 + 18,000 + 17,000.', work: '17,842 ≈ 18,000, 18,347 ≈ 18,000, 16,905 ≈ 17,000. 18,000 + 18,000 + 17,000 = 53,000.', calc: false },
      { q: 'What is the exact total attendance?', a: 53094, hint: 'Add all three numbers.', work: '17,842 + 18,347 + 16,905 = 53,094.' },
      { q: 'How many more fans came to the biggest game than the smallest?', a: 1442, hint: 'Biggest minus smallest.', work: '18,347 − 16,905 = 1,442.' }] },
    2: { title: 'Chinook Week', story: 'A week in Calgary: Monday <strong>−18°C</strong>, then a chinook warms it by <strong>22°C</strong> on Tuesday. On Wednesday it drops <strong>9°C</strong>.', parts: [
      { q: 'What is Tuesday\'s temperature?', a: 4, unit: '°C', hint: 'Start at −18 and move up 22.', work: '−18 + 22 = 4.', calc: false },
      { q: 'What is Wednesday\'s temperature?', a: -5, neg: true, unit: '°C', hint: 'Start at 4 and move down 9.', work: '4 − 9 = −5.', calc: false },
      { q: 'How many degrees warmer is Wednesday than Monday?', a: 13, unit: '°C', hint: 'Count from −18 up to −5.', work: '−5 − (−18) = 13.', calc: false }] },
    3: { title: 'Grocery Run', story: 'You have <strong>$40.00</strong>. Your list: milk $5.49, bread $3.29, apples $6.80, cheese $8.99.', parts: [
      { q: 'What is the total cost?', a: 24.57, pre: '$', hint: 'Line up the decimal points and add.', work: '5.49 + 3.29 + 6.80 + 8.99 = 24.57.' },
      { q: 'How much change do you get from $40.00?', a: 15.43, pre: '$', hint: '40.00 − total.', work: '40.00 − 24.57 = 15.43.' },
      { q: 'You also want 3 granola boxes at $4.25 each. Can you afford them? Type the money left after buying them.', a: 2.68, pre: '$', hint: '3 × 4.25 first.', work: '3 × 4.25 = 12.75. 15.43 − 12.75 = 2.68 left, so yes.' }] },
    4: { title: 'Party Planning', story: 'Hot dogs come in packs of <strong>8</strong>. Buns come in packs of <strong>6</strong>. You want the same number of each.', parts: [
      { q: 'What is the smallest number of hot dogs (and buns) you can buy so they match?', a: 24, hint: 'List multiples of 8 and of 6. Find the first match.', work: 'Multiples of 8: 8, 16, 24. Multiples of 6: 6, 12, 18, 24. The first match is 24.', calc: false },
      { q: 'How many packs of hot dogs is that?', a: 3, hint: '24 ÷ 8.', work: '24 ÷ 8 = 3 packs.', calc: false },
      { q: 'People eat 3/8 of the hot dogs in the first hour. How many hot dogs is that?', a: 9, hint: '1/8 of 24 is 3.', work: '24 ÷ 8 = 3, and 3 × 3 = 9.', calc: false }] },
    5: { title: 'Back-to-School Sale', story: 'A backpack costs <strong>$60</strong>. The store has <strong>25% off</strong> today.', parts: [
      { q: 'How much is the discount?', a: 15, pre: '$', hint: '25% is a quarter. Half of a half.', work: '25% of 60 = 60 ÷ 4 = 15.', calc: false },
      { q: 'What is the sale price?', a: 45, pre: '$', hint: 'Price − discount.', work: '60 − 15 = 45.' },
      { q: 'Another store sells it for $50 with 10% off. What is that sale price?', a: 45, pre: '$', hint: '10% of 50 is 5.', work: '10% of 50 = 5. 50 − 5 = 45. Both stores charge the same!' }] },
    6: { title: 'Weekend Shift', story: 'You work at the rink from <strong>9:30 a.m.</strong> to <strong>3:00 p.m.</strong> on Saturday and earn <strong>$15 an hour</strong>.', parts: [
      { q: 'How many hours did you work? (Use a decimal, like 4.5)', a: 5.5, unit: 'hours', hint: '9:30 to 2:30 is 5 hours, then 30 more minutes.', work: '9:30 a.m. to 3:00 p.m. = 5 h 30 min = 5.5 hours.', calc: false },
      { q: 'What is 3:00 p.m. in 24-hour time? (Type it like 15:00)', a: ['15:00', '1500'], hint: 'Add 12 to afternoon hours.', work: '3 + 12 = 15, so 15:00.', calc: false },
      { q: 'How much did you earn?', a: 82.5, pre: '$', hint: 'Hours × $15.', work: '5.5 × 15 = 82.50.' }] },
    7: { title: 'Saving for a Bike', story: 'You have <strong>$40</strong> saved and add <strong>$15</strong> every week. The bike costs <strong>$220</strong>.', parts: [
      { q: 'How much will you have after 6 weeks?', a: 130, pre: '$', hint: 'Start + 15 × weeks.', work: '40 + 15 × 6 = 130.' },
      { q: 'Write and solve: 40 + 15w = 220. How many weeks is that?', a: 12, unit: 'weeks', hint: 'Subtract 40 from both sides, then divide by 15.', work: '15w = 180, so w = 12.' },
      { q: 'If you saved $20 a week instead, how many weeks would it take?', a: 9, unit: 'weeks', hint: '40 + 20w = 220.', work: '20w = 180, so w = 9.' }] },
    8: { title: 'Fence the Garden', story: 'A garden is <strong>6 m</strong> long and <strong>4 m</strong> wide. Fencing costs <strong>$12 a metre</strong> and sod costs <strong>$5 a square metre</strong>.', parts: [
      { q: 'How many metres of fencing are needed to go around it?', a: 20, unit: 'm', hint: '2 × (length + width).', work: '2 × (6 + 4) = 20 m.' },
      { q: 'How much will the fencing cost?', a: 240, pre: '$', hint: 'Metres × $12.', work: '20 × 12 = 240.' },
      { q: 'How much will sod cost to cover the whole garden?', a: 120, pre: '$', hint: 'Area first: length × width.', work: 'Area = 6 × 4 = 24 m². 24 × 5 = 120.' }] },
    9: { title: 'Fish Tank Setup', story: 'A fish tank is <strong>60 cm</strong> long, <strong>30 cm</strong> wide and <strong>35 cm</strong> tall.', parts: [
      { q: 'What is its volume in cm³?', a: 63000, unit: 'cm³', hint: 'Length × width × height.', work: '60 × 30 × 35 = 63,000 cm³.' },
      { q: 'How many litres of water will fill it?', a: 63, unit: 'L', hint: '1,000 cm³ = 1 L.', work: '63,000 cm³ = 63,000 mL = 63 L.' },
      { q: 'You fill it with a 4 L bucket. How many full buckets will it take? (Round up.)', a: 16, hint: '63 ÷ 4, then round up.', work: '63 ÷ 4 = 15.75, so 16 buckets.' }] },
    10: { title: 'Store Survey', story: 'You survey <strong>30 students</strong> about the class store. 12 choose chocolate, 9 choose tea, 6 choose stickers and the rest choose a game block.', parts: [
      { q: 'How many students chose a game block?', a: 3, hint: '30 minus the others.', work: '30 − 12 − 9 − 6 = 3.', calc: false },
      { q: 'If you pick one student at random, what is the chance they chose chocolate, as a percent?', a: 40, unit: '%', hint: '12 out of 30.', work: '12 ÷ 30 = 0.4 = 40%.' },
      { q: 'You expect 90 students next term. About how many would choose chocolate?', a: 36, hint: '40% of 90, or 3 times as many as now.', work: '90 is 3 × 30, so 3 × 12 = 36.' }] }
  }
};
