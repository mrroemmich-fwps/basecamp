/* ============================================================
   CEFL 8: content for the Practice section.
   Same format as practice-science8.js (see the notes there).
   Lessons with a number generator (pay, tax, interest) also use it.
   ============================================================ */
window.PDATA = {
  course: 'CEFL 8', numeric: false, calcNotes: false,
  banks: {
    'u1-l1': [
      ['New self-checkouts mean a store hires fewer cashiers. What changed the labour market?', ['Technology', 'An election', 'The weather'], 0, 'Technology replaces some tasks.'],
      ['A slowdown in the oil industry leads to layoffs. This is part of an…', ['Economic cycle', 'Social change', 'Election'], 0, 'Booms and slowdowns.'],
      ['Technology can create new jobs, like…', ['Repairing and programming machines', 'None at all'], 0, 'New tools need new skills.', 3]
    ],
    'u1-l2': [
      ['Which is a transferable skill?', ['Time management', 'Operating one brand of fryer', 'Knowing one store\'s layout'], 0, 'It works in any job.'],
      ['Coaching a kids\' team builds…', ['Leadership and communication', 'Welding skills', 'Accounting'], 0, 'Skills you can use anywhere.'],
      ['Why do employers value transferable skills?', ['They help workers succeed in many tasks and roles', 'They don\'t'], 0, 'They make you adaptable.', 3]
    ],
    'u1-l3': [
      ['Career security means…', ['You can find new work quickly when things change', 'You stay in one job forever'], 0, 'Adaptability is the key.'],
      ['Which builds career resilience?', ['Continuous learning', 'Avoiding new skills'], 0, 'Keep learning.'],
      ['Your human capital grows when you…', ['Gain education, skills and experience', 'Buy a new phone'], 0, 'It is the value you bring to work.', 3]
    ],
    'u1-l4': [
      ['Representation in careers means…', ['Who works in a field and who is missing', 'Who pays for training'], 0, 'Seeing people like you matters.'],
      ['Why can role models help under-represented groups?', ['They show a career is possible', 'They make the job easier'], 0, 'Seeing it helps you believe it.'],
      ['A growth mindset sounds like…', ['"I can\'t do it yet, but I\'m learning."', '"I\'ll never be good at this."'], 0, 'Yet means you can grow.', 3]
    ],
    'u1-l5': [
      ['Which is a long-term career goal?', ['Become a registered nurse', 'Finish this week\'s homework'], 0, 'It takes years.'],
      ['Milestones are…', ['Smaller steps toward a big goal', 'The final goal'], 0, 'They break the path into parts.'],
      ['Why should career goals be flexible?', ['Your interests and the labour market change', 'Goals don\'t matter'], 0, 'Rigid goals cause stress.', 3]
    ],
    'u2-l1': [
      ['On a job offer, "probation period" means…', ['A trial time at the start of a job', 'Overtime pay', 'Vacation'], 0, 'Both sides see if it\'s a good fit.'],
      ['"$17/hour, 25 hours a week" tells you…', ['The wage and the hours', 'The yearly bonus', 'The benefits'], 0, 'Pay rate and schedule.'],
      ['Before accepting a job offer, you should…', ['Read it carefully and ask questions about anything unclear', 'Sign without reading'], 0, 'Know what you\'re agreeing to.', 3]
    ],
    'u2-l2': [
      { q: 'You earn $16 an hour for 20 hours a week. What is your weekly pay?', a: 320, pre: '$', why: '16 × 20 = 320.' },
      { q: 'A job pays $500 a week. How much is that in a year (52 weeks)?', a: 26000, pre: '$', why: '500 × 52 = 26,000.' },
      ['To find yearly pay from weekly pay, multiply by…', ['52', '12', '365'], 0, 'There are about 52 weeks in a year.']
    ],
    'u2-l3': [
      ['Total compensation includes…', ['Pay, bonuses and benefits', 'Only your hourly wage'], 0, 'Everything the job gives you.'],
      ['Which is a non-monetary benefit?', ['Dental insurance', 'Your wage', 'A paycheque'], 0, 'It has value but isn\'t cash in hand.'],
      { q: 'Salary $40,000 + bonus $1,000 + benefits worth $3,000. Total compensation?', a: 44000, pre: '$', why: '40,000 + 1,000 + 3,000 = 44,000.' }
    ],
    'u2-l4': [
      ['Which is a non-salary factor in choosing a job?', ['Working hours and conditions', 'The hourly wage'], 0, 'Things beyond pay matter.'],
      ['A job offers training and chances for promotion. This matters because…', ['It helps your career grow', 'It doesn\'t'], 0, 'Growth adds long-term value.'],
      ['Why might someone take a lower-paying job?', ['Better hours, safety or growth', 'They can\'t count'], 0, 'Money isn\'t the only factor.', 3]
    ],
    'u2-l5': [
      ['When comparing two offers, you should look at…', ['Total compensation and conditions', 'Only the hourly wage'], 0, 'Compare the whole package.'],
      ['Job A pays more per hour but has no benefits. Job B pays less with benefits worth $4,000. Which is worth more?', ['It depends: calculate total compensation', 'Always Job A'], 0, 'Do the math before deciding.'],
      { q: 'Job A: $18/hour × 40 h × 52 weeks. What is the yearly pay?', a: 37440, pre: '$', why: '18 × 40 × 52 = 37,440.', lv: 3 }
    ],
    'u2-l6': [
      ['Networking is…', ['Building relationships to share information and support', 'Fixing computers', 'Posting online all day'], 0, 'People open doors.'],
      ['Which is part of your network?', ['A former coach', 'A celebrity you\'ve never met'], 0, 'People you actually know.'],
      ['After someone helps with your job search, you should…', ['Thank them', 'Never contact them again'], 0, 'Gratitude keeps connections strong.', 3]
    ],
    'u3-l1': [
      ['Gross pay is…', ['What you earn before deductions', 'What lands in your bank account'], 0, 'Net is after deductions.'],
      ['Which is a mandatory deduction?', ['CPP', 'A gym membership', 'Streaming fees'], 0, 'CPP, EI and income tax are required.'],
      { q: 'Gross $700. Deductions: tax $56, CPP $35, EI $11. What is net pay?', a: 598, pre: '$', why: '700 − 56 − 35 − 11 = 598.' }
    ],
    'u3-l2': [
      ['In a tax bracket system, a raise into a higher bracket means…', ['Only the dollars above the line pay the higher rate', 'All your income is taxed more'], 0, 'This is a common myth.'],
      ['Tax brackets tax different portions of income at…', ['Different rates', 'The same rate'], 0, 'Each portion has its own rate.'],
      ['Canada\'s income tax system is…', ['Progressive', 'Flat', 'Regressive'], 0, 'Higher incomes pay higher rates.', 3]
    ],
    'u3-l3': [
      ['In a flat tax system, everyone pays…', ['The same rate', 'The same dollar amount', 'Nothing'], 0, 'Same percentage for all.'],
      ['A $100 fee charged to everyone is…', ['Regressive', 'Progressive'], 0, 'It is a bigger share of a small income.'],
      ['Why do many people think progressive taxes are fair?', ['People who earn more can afford to pay a bigger share', 'Everyone pays nothing'], 0, 'Ability to pay.', 3]
    ],
    'u3-l4': [
      ['Which is paid for by taxes?', ['Public schools', 'Movie tickets', 'Your phone'], 0, 'A public service.'],
      ['The social contract is the idea that…', ['We pay taxes to share public services', 'Only rich people use roads'], 0, 'Shared responsibility.'],
      ['Which level of government mainly funds local roads and parks?', ['Municipal', 'Federal only'], 0, 'Through property taxes.', 3]
    ],
    'u3-l5': [
      ['Which is one of the three OHS rights?', ['The right to refuse unsafe work', 'The right to a raise', 'The right to choose your boss'], 0, 'Know, participate, refuse.'],
      ['Who sets rules about breaks, pay and young workers in Alberta?', ['Alberta Employment Standards', 'Your friends'], 0, 'The official rules.'],
      ['A worker\'s responsibility is to…', ['Follow safety rules and report hazards', 'Ignore training'], 0, 'Safety is everyone\'s job.', 3]
    ],
    'u4-l1': [
      ['A cost is…', ['The time, money or resources needed to get or keep something', 'Only money spent on food'], 0, 'Costs aren\'t only money.'],
      ['Which cost is easiest to cut quickly?', ['Eating out', 'Rent'], 0, 'Variable costs are in your control.'],
      ['Car insurance is usually a…', ['Fixed cost', 'Variable cost'], 0, 'Same amount each month.', 3]
    ],
    'u4-l2': [
      ['"Pay yourself first" means…', ['Save before you spend', 'Buy yourself a treat first'], 0, 'Savings come off the top.'],
      ['In a balanced budget, income minus spending and saving equals…', ['0', 'Your age', 'Your rent'], 0, 'Every dollar has a job.'],
      { q: 'You earn $300 a month and save $75. What percent are you saving?', a: 25, unit: '%', why: '75 ÷ 300 = 0.25 = 25%.', lv: 3 }
    ],
    'u4-l3': [
      ['In I = P × r × t, P stands for…', ['Principal', 'Price', 'Profit'], 0, 'The starting amount.'],
      ['Simple interest is earned on…', ['Only the principal', 'Interest and principal'], 0, 'Compound is on both.'],
      { q: '$1,000 at 3% simple interest for 2 years. How much interest?', a: 60, pre: '$', why: '1,000 × 0.03 × 2 = 60.' }
    ],
    'u4-l4': [
      ['Compound interest is earned on…', ['The principal and interest already earned', 'Only the principal'], 0, 'Interest on interest.'],
      ['Why does starting to save early matter?', ['Compound interest has more time to grow', 'Banks prefer young people'], 0, 'Time is the biggest factor.'],
      { q: '$500 at 10% compound interest. How much after 2 years?', a: 605, pre: '$', why: '500 × 1.1 = 550, then 550 × 1.1 = 605.' }
    ],
    'u4-l5': [
      ['Money you need next month should be…', ['Saved somewhere safe', 'Invested in risky stocks'], 0, 'Short-term money should be safe.'],
      ['Higher possible return usually means…', ['Higher risk', 'No risk'], 0, 'Risk and return go together.'],
      { q: 'An investment grew from $2,000 to $2,100. What is the return, as a percent?', a: 5, unit: '%', why: '100 ÷ 2,000 = 0.05 = 5%.' }
    ],
    'u5-l1': [
      ['Which pathway pays you while you learn?', ['Apprenticeship', 'Most university degrees'], 0, 'Apprentices are paid employees.'],
      ['Admission requirements are…', ['The courses and marks you need to get in', 'The tuition price'], 0, 'Check them early.'],
      ['"Competitive admission" means…', ['Meeting the minimum doesn\'t guarantee a spot', 'Everyone gets in'], 0, 'More applicants than spaces.', 3]
    ],
    'u5-l2': [
      ['Labour market information shows…', ['Which careers are in demand and what they pay', 'Movie times'], 0, 'LMI helps you plan.'],
      ['Where can you find Alberta career outlooks?', ['ALIS OCCinfo', 'A meme page'], 0, 'Official labour market info.'],
      ['Your dream job has few openings. A smart move is…', ['Keep the goal and plan a related backup', 'Give up on all goals'], 0, 'Combine dreams with data.', 3]
    ],
    'u5-l3': [
      ['Which do you NOT have to pay back?', ['A scholarship', 'A student loan'], 0, 'Scholarships are free money.'],
      ['A bursary is usually based on…', ['Financial need', 'Your height'], 0, 'Help for those who need it.'],
      ['Besides tuition, the cost of school includes…', ['Books, fees, rent and food', 'Nothing else'], 0, 'Add it all up.', 3]
    ],
    'u5-l4': [
      ['A good career conversation question is…', ['"How did you get into your job?"', '"How much money do you have?"'], 0, 'Ask about their path.'],
      ['Your network includes…', ['Family, coaches, teachers and employers', 'Only people online'], 0, 'People you actually know.'],
      ['Many jobs are found through…', ['People you know', 'Luck only'], 0, 'Networking matters.', 3]
    ],
    'u5-l5': [
      ['Why plan high school courses early?', ['Some programs need specific prerequisites', 'It doesn\'t matter'], 0, 'Missing a prerequisite can close a door.'],
      ['Who can help you build a course plan?', ['A school counsellor', 'No one'], 0, 'They know the requirements.'],
      ['Working backwards from a goal means…', ['Start with what the program requires and plan back to Grade 10', 'Start at university'], 0, 'Plan backwards.', 3]
    ]
  },

  vocab: {
    1: [['Labour market', 'Where workers and employers meet.'], ['Economic cycle', 'Booms and slowdowns in the economy.'], ['Transferable skill', 'A skill that works in many jobs.'], ['Career resilience', 'The ability to adapt to change without losing work.'], ['Human capital', 'The value of your education, skills, knowledge and experience.'], ['Job security', 'Staying in one job for a long time.'], ['Career security', 'Being able to find new work quickly.'], ['Growth mindset', 'Believing you can improve with effort: "not yet."']],
    2: [['Job offer', 'An employer\'s offer of a job, with pay and conditions.'], ['Wage', 'Pay for each hour worked.'], ['Salary', 'A set amount per year.'], ['Total compensation', 'Pay plus bonuses and benefits.'], ['Benefits', 'Non-cash extras like dental or health insurance.'], ['Bonus', 'Extra one-time pay.'], ['Probation', 'A trial period at the start of a job.'], ['Networking', 'Building relationships to share information and support.']],
    3: [['Gross pay', 'What you earn before deductions.'], ['Net pay', 'What you take home after deductions.'], ['Deduction', 'Money taken off your pay.'], ['Tax bracket', 'A range of income taxed at one rate.'], ['Progressive tax', 'Higher incomes pay a higher rate.'], ['Flat tax', 'Everyone pays the same rate.'], ['Regressive tax', 'Lower incomes pay a bigger share.'], ['Social contract', 'We pay taxes to share public services.']],
    4: [['Fixed cost', 'A cost that stays the same each month.'], ['Variable cost', 'A cost that changes with your choices.'], ['Budget', 'A plan for your money.'], ['Principal', 'The starting amount borrowed or saved.'], ['Interest', 'The cost of borrowing or the reward for saving.'], ['Compound interest', 'Interest earned on principal and past interest.'], ['Return', 'The gain or loss on an investment, often as a percent.'], ['Risk', 'The chance of losing value.']],
    5: [['Post-secondary', 'Education after high school.'], ['Apprenticeship', 'Paid on-the-job training plus classes for a trade.'], ['Admission requirements', 'The courses and marks needed to get into a program.'], ['Tuition', 'The price of classes at a school.'], ['Scholarship', 'Free money for school, usually for achievement.'], ['Bursary', 'Free money for school, usually based on need.'], ['Student loan', 'Borrowed money for school that must be repaid.'], ['Prerequisite', 'A course you must take before another.']]
  },

  tasks: {
    1: { title: 'Future-Proof Career', story: 'Jayden wants to drive a delivery truck. He hears that self-driving trucks are being tested.', parts: [
      { q: 'What is changing the labour market for Jayden?', o: ['Technology', 'The weather', 'An election'], a: 0, work: 'Automation is new technology.' },
      { q: 'Which would most build Jayden\'s career resilience?', o: ['Learning to maintain and repair trucks too', 'Ignoring the news', 'Only ever driving one route'], a: 0, work: 'More skills mean more options.' },
      { q: 'List three transferable skills Jayden could build that would help in many jobs.', model: 'Time management, customer service and problem solving. He could also learn basic mechanics and how to use delivery software.', look: ['Three skills', 'Each works in more than one job'] }] },
    2: { title: 'Two Summer Jobs', story: 'Job A: $17/hour, 30 hours a week, no benefits. Job B: $16/hour, 30 hours a week, plus a $300 end-of-summer bonus. The summer is 10 weeks.', parts: [
      { q: 'How much does Job A pay for the summer?', a: 5100, pre: '$', work: '17 × 30 × 10 = 5,100.' },
      { q: 'What is Job B\'s total for the summer, including the bonus?', a: 5100, pre: '$', work: '16 × 30 × 10 = 4,800, plus 300 = 5,100.' },
      { q: 'The pay is the same. What else would help you choose?', model: 'I would compare hours and schedule, how far it is from home, whether there is training or a chance to come back next year, and how safe and friendly the workplace is.', look: ['At least two non-money factors', 'A reason for each'] }] },
    3: { title: 'First Paycheque', story: 'Riley worked 25 hours at $16 an hour. Deductions: income tax $28, CPP $19.50, EI $6.60.', parts: [
      { q: 'What is Riley\'s gross pay?', a: 400, pre: '$', work: '25 × 16 = 400.' },
      { q: 'What is Riley\'s net pay?', a: 345.9, pre: '$', work: '400 − 28 − 19.50 − 6.60 = 345.90.' },
      { q: 'Riley says, "Taxes are a waste." Write a response that explains what taxes pay for.', model: 'Taxes pay for things we all use, like schools, hospitals, roads, and police and firefighters. Riley\'s taxes help others, and other people\'s taxes help Riley.', look: ['At least two public services', 'The idea of sharing (social contract)'] }] },
    4: { title: 'Saving for a Laptop', story: 'You want a $900 laptop. You earn $250 a month babysitting. Your phone plan is $40 a month and you usually spend $90 on food and fun.', parts: [
      { q: 'How much can you save each month after your phone and spending?', a: 120, pre: '$', work: '250 − 40 − 90 = 120.' },
      { q: 'How many months to save $900? (Round up.)', a: 8, unit: 'months', work: '900 ÷ 120 = 7.5, so 8 months.' },
      { q: 'Suggest one change to reach the goal faster, and how many months it would take.', model: 'Cut food and fun from $90 to $40, so I save $170 a month. 900 ÷ 170 ≈ 5.3, so about 6 months.', look: ['A change to a variable cost', 'The new number of months'] }] },
    5: { title: 'Pathway Planner', story: 'Aisha wants to be a veterinary technologist. The college program asks for Biology 30, English 30 and Math 20, with a competitive admission average.', parts: [
      { q: 'When should Aisha start planning her courses?', o: ['Now, before Grade 10', 'In Grade 12', 'After graduation'], a: 0, work: 'Prerequisites take years to fit in.' },
      { q: 'Which is free money she doesn\'t have to pay back?', o: ['A scholarship', 'A student loan', 'A credit card'], a: 0, work: 'Scholarships are free.' },
      { q: 'Suggest two experiences that would strengthen Aisha\'s application.', model: 'Volunteering at an animal shelter and getting a part-time job at a pet store or vet clinic. Both show interest and build skills with animals.', look: ['Two experiences', 'Each connects to her career'] }] }
  }
};
