/* Extra written questions so every lesson has at least 10 different ones (added Nov 2026).
   Same format as the banks in practice-math9.js. Added on top of what's already there. */
(function (add) { const B = window.PDATA.banks = window.PDATA.banks || {}; Object.keys(add).forEach(k => { B[k] = (B[k] || []).concat(add[k]); }); })({
  'u1-l2': [
    { q: 'What is 10⁴ written as a number?', a: 10000, why: '10⁴ has 4 zeros: 10,000.' },
    { q: 'How many zeros are in 10⁶?', a: 6, why: 'The exponent tells you the number of zeros.' },
    ['Which is 3,000 in expanded form with powers of 10?', ['3 × 10³', '3 × 10²', '30 × 10³'], 0, '10³ = 1,000, and 3 × 1,000 = 3,000.'],
    ['Write 5 × 10² + 4 × 10 + 7 as a number.', ['547', '5,470', '5,047'], 0, '500 + 40 + 7 = 547.']
  ],
  'u4-l3': [
    ['Which is the prime factorization of 12?', ['2 × 2 × 3', '3 × 4', '2 × 6'], 0, 'Every factor must be prime: 12 = 2 × 2 × 3.'],
    ['Which is the prime factorization of 30?', ['2 × 3 × 5', '5 × 6', '3 × 10'], 0, '30 = 2 × 15 = 2 × 3 × 5.'],
    ['Which is the prime factorization of 36?', ['2 × 2 × 3 × 3', '6 × 6', '4 × 9'], 0, '6 = 2 × 3, so 36 = 2 × 3 × 2 × 3.'],
    ['Which number is prime?', ['17', '21', '27'], 0, '17 has only the factors 1 and 17.'],
    ['Which is the prime factorization of 50?', ['2 × 5 × 5', '5 × 10', '2 × 25'], 0, '50 = 2 × 25 = 2 × 5 × 5.']
  ],
  'u2-l1': [
    { q: 'Write an integer for a $75 refund added to your account.', a: 75, neg: true, why: 'Money coming in is positive: +75.' },
    { q: 'The temperature drops 12 degrees. Write the change as an integer.', a: -12, neg: true, why: 'A drop is negative: −12.' },
    ['Which situation is shown by −40?', ['Spending $40 on groceries', 'Earning $40 babysitting', 'Finding $40'], 0, 'Spending takes money away, so it is negative.']
  ],
  'u2-l2': [
    ['Which is the least: −7, −1, 0 or 4?', ['−7', '−1', '0'], 0, '−7 is farthest left on the number line.'],
    ['Fort McMurray is −31°C and Calgary is −14°C. Which is warmer?', ['Calgary', 'Fort McMurray'], 0, '−14 is closer to zero, so it is warmer.'],
    { q: 'What integer is halfway between −10 and 2?', a: -4, neg: true, why: 'They are 12 apart; halfway is 6 from each: −10 + 6 = −4.' }
  ],
  'u3-l5': [
    ['Which formula adds cells D2 to D9?', ['=SUM(D2:D9)', '=AVERAGE(D2:D9)', 'SUM D2 to D9'], 0, 'SUM adds, and every formula starts with =.'],
    { q: 'Cells A1 to A3 hold 20, 30 and 40. What does =AVERAGE(A1:A3) show?', a: 30, why: '(20 + 30 + 40) ÷ 3 = 30.' },
    ['Which formula finds the smallest number in B2 to B12?', ['=MIN(B2:B12)', '=MAX(B2:B12)', '=SUM(B2:B12)'], 0, 'MIN finds the minimum (smallest).']
  ],
  'u5-l5': [
    { q: 'A 2 kg bag of rice costs $7.50. What is the price per kg?', a: 3.75, pre: '$', why: '$7.50 ÷ 2 = $3.75 per kg.' },
    { q: 'A 12-pack of pop costs $8.40. What is the price per can?', a: 0.70, pre: '$', why: '$8.40 ÷ 12 = $0.70 per can.' },
    ['Which is the better buy?', ['500 g for $4.00', '250 g for $2.50'], 0, '$4.00 ÷ 500 = $0.008/g; $2.50 ÷ 250 = $0.010/g. The 500 g bag is cheaper per gram.'],
    ['Which is the better buy?', ['6 eggs for $2.70', '12 eggs for $5.88'], 0, '$2.70 ÷ 6 = $0.45 each; $5.88 ÷ 12 = $0.49 each.'],
    { q: 'You drive 360 km on 30 L of gas. How many km per litre is that?', a: 12, unit: 'km/L', why: '360 ÷ 30 = 12 km per litre.' },
    ['To find a unit price, you…', ['Divide the price by the amount', 'Multiply the price by the amount', 'Subtract the amount from the price'], 0, 'Unit price = price ÷ amount.']
  ],
  'u5-l6': [
    { q: 'A price goes from $20 to $25. What is the percent increase?', a: 25, unit: '%', why: '(25 − 20) ÷ 20 × 100 = 25%.' },
    { q: 'Your wage goes from $15/h to $16.50/h. What is the percent increase?', a: 10, unit: '%', why: '(16.50 − 15) ÷ 15 × 100 = 10%.' },
    { q: 'A $80 jacket is now $60. What is the percent decrease? (Type the number.)', a: 25, unit: '%', why: '(80 − 60) ÷ 80 × 100 = 25% decrease.' },
    { q: 'An investment grows from 200 AvCash to 230 AvCash. What is the percent increase?', a: 15, unit: '%', why: '(230 − 200) ÷ 200 × 100 = 15%.' },
    ['In the percent change formula, you divide by…', ['The old (starting) amount', 'The new amount', '100'], 0, 'Percent change = (new − old) ÷ old × 100.'],
    ['Rent goes from $1,000 to $1,050. The percent change is…', ['+5%', '−5%', '+50%'], 0, '$50 ÷ $1,000 = 0.05 = 5%, and it went up.']
  ],
  'u6-l4': [
    { q: 'A server earns $16/h for 5 hours plus $45 in tips. What did they earn?', a: 125, pre: '$', why: '16 × 5 = $80, plus $45 = $125.' },
    { q: 'A real estate agent earns 2% commission on a $400,000 house. What is the commission?', a: 8000, pre: '$', why: '0.02 × 400,000 = $8,000.' },
    ['Which job is paid by commission?', ['A car salesperson', 'A cashier paid by the hour', 'A teacher on salary'], 0, 'Commission is a percent of what you sell.']
  ],
  'u7-l5': [
    ['On a cost graph, the line that starts higher on the y-axis has…', ['A bigger starting fee', 'A cheaper price per use', 'No cost at all'], 0, 'Where a line starts (at 0 uses) is the starting fee.'],
    ['A steeper cost line means…', ['Each use costs more', 'Each use costs less', 'It is free'], 0, 'Steeper = the cost climbs faster with each use.'],
    { q: 'Plan A: $30 + $3 a visit. Plan B: $6 a visit. At how many visits do they cost the same?', a: 10, why: '30 + 3v = 6v, so 30 = 3v and v = 10.' }
  ],
  'u10-l1': [
    ['A graph\'s x-axis says "Week" and the y-axis says "AvCash". What is it showing?', ['AvCash over time, week by week', 'How many weeks are in a year', 'Store prices'], 0, 'The axes tell you what is measured.'],
    ['Why check the scale on the y-axis?', ['To know what each grid line stands for', 'To find the title', 'To see the colours'], 0, 'The scale tells you how much each line is worth.']
  ],
  'u10-l2': [
    ['Which graph best shows your AvCash balance each week for 10 weeks?', ['Broken-line graph', 'Circle graph', 'Tally chart'], 0, 'Line graphs show change over time.'],
    ['Which graph best shows how a $50 budget is split up?', ['Circle graph', 'Broken-line graph', 'Bar graph of the weather'], 0, 'A circle graph shows parts of a whole.'],
    ['Which graph best compares votes for 4 store items?', ['Bar graph', 'Broken-line graph', 'Circle graph of the temperature'], 0, 'Bar graphs compare separate groups.'],
    ['You are counting car colours in the parking lot as they drive in. What should you use?', ['A tally chart', 'A circle graph', 'A line graph'], 0, 'Tallies are for counting while you collect.'],
    ['The parts of a circle graph must add up to…', ['100%', '50%', '10%'], 0, 'A circle graph shows the whole, which is 100%.'],
    ['Which graph would show the temperature each hour of a school day?', ['Broken-line graph', 'Circle graph', 'Pictograph of pets'], 0, 'Temperature over time is best as a line graph.']
  ],
  'u10-l4': [
    { q: 'Data: 8, 15, 6, 11, 10. What would =MAX show?', a: 15, why: 'MAX finds the biggest value: 15.' },
    { q: 'Data: 8, 15, 6, 11, 10. What would =AVERAGE show?', a: 10, why: '(8 + 15 + 6 + 11 + 10) ÷ 5 = 50 ÷ 5 = 10.' },
    ['Ice cream sales were high in July. "People only eat ice cream in summer" is…', ['Too strong: the data does not prove "only"', 'Definitely true', 'A prediction'], 0, 'A good conclusion matches what the data actually shows.'],
    ['Where did the data come from? Why does that matter?', ['A biased source can lead to a wrong conclusion', 'It does not matter', 'Only the colour of the graph matters'], 0, 'Always check the source.']
  ],
  'u10-l5': [
    ['Rolling a 7 on a regular 6-sided die is…', ['Impossible', 'Certain', 'Likely'], 0, 'A die only has 1 to 6.'],
    ['The sun rising tomorrow is…', ['Certain', 'Impossible', 'Equally likely'], 0, 'It happens every day.'],
    ['A 10% chance of rain means rain is…', ['Improbable (unlikely)', 'Probable (likely)', 'Certain'], 0, '10% is close to 0.'],
    ['Picking a red card from a deck (half the cards are red) is…', ['Equally likely as not', 'Impossible', 'Certain'], 0, 'Half red, half black = 50/50.'],
    ['A chance of 0.75 is the same as…', ['75%', '7.5%', '0.75%'], 0, '0.75 × 100 = 75%.'],
    ['"Worst case" means…', ['The least favourable outcome you plan for', 'The most likely outcome', 'Something impossible'], 0, 'Workplaces plan for the worst case so they are ready.'],
    ['Which probability is the most likely?', ['0.9', '0.5', '0.1'], 0, 'The closer to 1, the more likely.']
  ]
});
