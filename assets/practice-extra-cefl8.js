/* Extra written questions so every lesson has at least 10 different ones (added Nov 2026).
   Same format as the banks in practice-cefl8.js: [question, choices (right one first), 0, why]
   or a typed number { q, a, pre, unit, why }. */
(function (add) { const B = window.PDATA.banks = window.PDATA.banks || {}; Object.keys(add).forEach(k => { B[k] = (B[k] || []).concat(add[k]); }); })({
  'u1-l1': [
    ['The labour market is…', ['Where workers and employers meet', 'A store that sells tools', 'A farmers\' market'], 0, 'Workers offer skills; employers offer jobs.'],
    ['An economic boom usually means…', ['More jobs and hiring', 'Many layoffs', 'Stores closing'], 0, 'Booms bring growth.'],
    ['Which job was created by new technology?', ['Drone pilot', 'Blacksmith', 'Telephone switchboard operator'], 0, 'Drones are a newer technology.'],
    ['An aging population means more demand for…', ['Health-care workers', 'Toy makers', 'School bus drivers'], 0, 'Older people need more health care.'],
    ['Online shopping growing is an example of…', ['Technological and social change', 'An oil boom', 'No change'], 0, 'Habits and tools change jobs.'],
    ['Why should you watch labour market changes?', ['To choose skills and careers that will be in demand', 'It doesn\'t matter', 'To avoid working'], 0, 'Plan for the future.']
  ],
  'u1-l2': [
    ['Time management means…', ['Planning your time so work gets done on schedule', 'Always being late', 'Doing everything at the last minute'], 0, 'A key employability skill.'],
    ['Explaining a problem clearly to a customer shows…', ['Communication', 'Welding', 'Typing speed'], 0, 'Communication is transferable.'],
    ['Figuring out why your bike chain keeps falling off builds…', ['Problem solving', 'Public speaking', 'Accounting'], 0, 'Problem solving works in any job.'],
    ['Critical thinking means…', ['Thinking carefully and checking ideas before deciding', 'Criticizing everyone', 'Thinking fast without checking'], 0, 'Good decisions need careful thought.'],
    ['Which shows teamwork?', ['Helping a classmate finish a group project', 'Doing only your own thing', 'Refusing to share'], 0, 'Teams work toward one goal.'],
    ['Which is a job-specific skill, not transferable?', ['Operating a crane', 'Communication', 'Teamwork'], 0, 'Crane operation only fits certain jobs.']
  ],
  'u1-l3': [
    ['Continuous learning means…', ['Always building new skills, even after school ends', 'Stopping learning at 18', 'Only learning in school'], 0, 'Skills keep you resilient.'],
    ['Agility at work means…', ['Being able to adapt quickly to change', 'Running fast', 'Never changing'], 0, 'Adaptable workers find new paths.'],
    ['Which shows a fixed mindset?', ['"I\'m just bad at math. I\'ll never get it."', '"I can\'t do it yet."', '"I\'ll try a new strategy."'], 0, 'Fixed mindset gives up.'],
    ['Taking a first aid course adds to your…', ['Human capital', 'Debt', 'Tax bracket'], 0, 'New skills raise your value to employers.'],
    ['A worker loses a job but finds a new one quickly. They have…', ['Career security', 'No skills', 'Job security only'], 0, 'Resilience helps you bounce back.']
  ],
  'u1-l4': [
    ['Under-represented means…', ['A group has fewer people in a field than you\'d expect', 'A group has too many people', 'Nobody works there'], 0, 'For example, few women in some trades.'],
    ['Programs that encourage women into trades help by…', ['Opening careers to more people', 'Closing careers', 'Lowering pay'], 0, 'More people can picture themselves there.'],
    ['A boy who wants to be a nurse but sees few male nurses could…', ['Talk to a male nurse about the career', 'Give up', 'Pick a job he doesn\'t want'], 0, 'Role models help.'],
    ['Why do diverse workplaces often do better?', ['Different perspectives lead to better ideas', 'They don\'t', 'Everyone thinks the same'], 0, 'Diversity strengthens teams.'],
    ['A role model is…', ['Someone whose path you can learn from', 'A famous model only', 'A boss who yells'], 0, 'Seeing their path helps you plan yours.'],
    ['Which question checks for stereotypes in career choices?', ['"Am I avoiding this career because of who usually does it?"', '"What\'s the uniform colour?"', '"Is it close to the mall?"'], 0, 'Choose by interest, not stereotype.']
  ],
  'u1-l5': [
    ['"Finish Grade 12 with Math 30-1" is a…', ['Long-term goal for a Grade 8 student', 'Short-term goal for this month', 'Not a goal'], 0, 'It\'s years away.'],
    ['"Get 80% on my next science test" is a…', ['Short-term goal', 'Long-term goal'], 0, 'It\'s coming up soon.'],
    ['A career map shows…', ['Your goal and the milestones on the way', 'Directions to the mall', 'Your report card'], 0, 'Milestones mark progress.'],
    ['A backup route in a career plan is…', ['Another path if the first one doesn\'t work out', 'Giving up', 'A road map'], 0, 'Plans need flexibility.'],
    ['Why break a big goal into milestones?', ['Smaller steps are easier to start and track', 'To make it harder', 'Milestones aren\'t useful'], 0, 'Progress feels doable.'],
    ['Which is a milestone on the way to becoming a chef?', ['Taking Foods classes in high school', 'Buying a fancy car', 'Watching cartoons'], 0, 'Each step builds skills.']
  ],
  'u2-l1': [
    ['"Start date" on a job offer tells you…', ['Your first day of work', 'Your birthday', 'When you get paid'], 0, 'Know when to show up.'],
    ['"Duties" on a job offer are…', ['The tasks you will do', 'Taxes you pay', 'Your break times'], 0, 'Duties describe the job.'],
    { q: '$16/hour for 20 hours a week. What is the weekly gross pay?', a: 320, pre: '$', why: '16 × 20 = $320.' },
    ['Benefits in a job offer could include…', ['Dental coverage or a staff discount', 'Your hourly wage only', 'Your manager\'s name'], 0, 'Benefits are extras beyond pay.'],
    ['It\'s okay to ask questions about a job offer before saying yes.', ['True', 'False'], 0, 'Clarify anything you don\'t understand.']
  ],
  'u2-l4': [
    ['A short commute is a non-salary factor because…', ['It saves time and money every day', 'It raises your wage', 'It isn\'t a factor'], 0, 'Travel time matters.'],
    ['A friendly, respectful workplace affects…', ['How much you enjoy your job', 'Nothing', 'Only your pay'], 0, 'Workplace culture matters.'],
    ['Flexible hours help someone who…', ['Has school or family responsibilities', 'Wants fewer choices', 'Never works'], 0, 'Flexibility fits busy lives.'],
    ['A job with a pension plan helps you…', ['Save for retirement', 'Get paid daily', 'Skip taxes'], 0, 'Pensions provide income later.'],
    ['Which job might be best for someone who loves the outdoors?', ['Park ranger', 'Data entry clerk', 'Call centre agent'], 0, 'Work environment is a factor.'],
    ['Why compare non-salary factors?', ['A job that fits your life can be worth more than higher pay', 'Pay is all that matters', 'They\'re all the same'], 0, 'Look at the whole picture.']
  ],
  'u2-l6': [
    ['An informational interview is…', ['A short talk with someone about their career', 'A job interview', 'A test'], 0, 'You ask questions to learn.'],
    ['Which is a polite way to start networking?', ['"Hi, I\'m interested in your job. Could I ask you a few questions?"', '"Give me a job."', '"What do you earn?"'], 0, 'Start with polite curiosity.'],
    ['Your network can include…', ['Family friends, coaches and teachers', 'Only famous people', 'Nobody until you\'re 18'], 0, 'Everyone you know counts.'],
    ['Why do people share job leads with their network?', ['They trust people they know', 'It\'s required by law', 'They don\'t'], 0, 'Personal connections build trust.'],
    ['A follow-up thank-you message should be sent…', ['Within a day or two', 'A year later', 'Never'], 0, 'Show appreciation quickly.'],
    ['Online networking should be…', ['Professional and respectful', 'Full of memes', 'Rude'], 0, 'Your online image matters.']
  ],
  'u3-l1': [
    ['CPP stands for…', ['Canada Pension Plan', 'Canadian Pay Plan', 'Cash Payment Program'], 0, 'It saves for your retirement.'],
    ['EI helps you if…', ['You lose your job', 'You get a raise', 'You go on vacation'], 0, 'Employment Insurance.'],
    { q: 'Gross pay $500. Deductions total $60. What is the net pay?', a: 440, pre: '$', why: '500 − 60 = $440.' },
    ['Your pay stub shows…', ['Gross pay, deductions and net pay', 'Only your hours', 'Your boss\'s pay'], 0, 'Check it every payday.'],
    ['Which is usually bigger?', ['Gross pay', 'Net pay'], 0, 'Net pay is after deductions.']
  ],
  'u3-l2': [
    ['A tax bracket is…', ['A range of income taxed at one rate', 'A shelf for tax forms', 'A type of loan'], 0, 'Different ranges, different rates.'],
    ['If the first $10,000 is taxed at 10% and the rest at 20%, how much tax is on $15,000?', ['$2,000', '$3,000', '$1,500'], 0, '10% of 10,000 = $1,000; 20% of 5,000 = $1,000; total $2,000.'],
    ['Does a raise ever leave you with less take-home pay because of brackets?', ['No, only the extra dollars are taxed at the higher rate', 'Yes, always', 'Only on Fridays'], 0, 'You always keep more after a raise.']
  ],
  'u3-l3': [
    ['Sales tax is often called regressive because…', ['It takes a bigger share of a small income', 'Rich people pay more of their income', 'It\'s not a tax'], 0, 'Everyone pays the same rate on purchases.'],
    ['In a progressive system, a person earning more pays…', ['A higher rate on their higher income', 'Less tax', 'No tax'], 0, 'Rates rise with income.'],
    ['A flat tax of 10% means someone earning $40,000 pays…', ['$4,000', '$400', '$10,000'], 0, '10% of 40,000 = 4,000.'],
    ['An argument for a flat tax is…', ['It\'s simple: everyone pays the same rate', 'It helps low incomes the most', 'It raises the most money'], 0, 'Simplicity is the main argument.'],
    ['An argument against regressive taxes is…', ['They are hardest on people with low incomes', 'They are too fair', 'Nobody pays them'], 0, 'Low earners feel them most.'],
    ['Which is progressive?', ['Higher incomes pay higher rates', 'Everyone pays $100', 'Everyone pays 10%'], 0, 'That\'s Canada\'s income tax.']
  ],
  'u3-l4': [
    ['Public health care in Canada is funded mainly by…', ['Taxes', 'Ticket sales', 'Donations only'], 0, 'Shared through taxes.'],
    ['Firefighters are usually paid by…', ['Local governments through taxes', 'The people whose house is on fire', 'Insurance companies only'], 0, 'Emergency services are public.'],
    ['Why might some people want lower taxes?', ['To keep more of their own income', 'To have more public services', 'They like paying more'], 0, 'People weigh taxes against services.'],
    ['Why might some people accept higher taxes?', ['To get more or better public services', 'To have less money', 'For no reason'], 0, 'Trade-off: services cost money.'],
    ['Which level of government mainly runs Alberta\'s schools and hospitals?', ['Provincial', 'Federal only', 'City only'], 0, 'Provinces handle health and education.'],
    ['Which service is run by the federal government?', ['The Canadian Armed Forces', 'Local garbage pickup', 'Your school\'s gym'], 0, 'Defence is federal.']
  ],
  'u3-l5': [
    ['The right to refuse unsafe work means…', ['You can say no to work you believe is dangerous', 'You can skip any task you dislike', 'You must do anything you\'re told'], 0, 'Report it to your supervisor.'],
    ['The right to know means your employer must…', ['Tell you about hazards and train you', 'Tell you their salary', 'Let you choose your hours'], 0, 'Training comes first.'],
    ['The right to participate means you can…', ['Take part in workplace safety, like a safety committee', 'Vote on your pay', 'Skip safety meetings'], 0, 'Workers help keep work safe.'],
    ['Employment Standards in Alberta cover…', ['Minimum wage, breaks, overtime and young workers', 'Only sports rules', 'School marks'], 0, 'Know your rights.'],
    ['If you get hurt at work, you should…', ['Report it to your supervisor right away', 'Hide it', 'Quit without telling anyone'], 0, 'Reporting protects you.'],
    ['Wearing your safety gear is a worker\'s…', ['Responsibility', 'Choice to ignore', 'Punishment'], 0, 'Rights come with responsibilities.']
  ],
  'u4-l2': [
    ['Fixed costs are…', ['The same every month, like a phone plan', 'Different every month, like snacks', 'Free'], 0, 'Fixed = predictable.'],
    ['Variable costs are…', ['Costs that change, like entertainment', 'Always the same', 'Taxes only'], 0, 'Variable = changes.'],
    { q: 'You earn $200 and save 20%. How much do you save?', a: 40, pre: '$', why: '20% of 200 = $40.' },
    { q: 'You want a $120 jacket and save $30 a month. How many months will it take?', a: 4, unit: 'months', why: '120 ÷ 30 = 4.' },
    ['A budget helps you…', ['Plan your money before you spend it', 'Spend more than you earn', 'Avoid saving'], 0, 'Plan first, spend second.'],
    ['If your spending is more than your income, you have a…', ['Deficit', 'Surplus', 'Bonus'], 0, 'Spending too much = deficit.']
  ],
  'u4-l5': [
    ['A savings account is…', ['Low risk with a small return', 'High risk with a big return', 'Not a place for money'], 0, 'Safe but slow.'],
    ['Stocks are…', ['Higher risk with a chance of higher return', 'Guaranteed', 'Always losing money'], 0, 'Values go up and down.'],
    { q: 'An investment went from $500 to $550. What is the return as a percent?', a: 10, unit: '%', why: '(550 − 500) ÷ 500 × 100 = 10%.' },
    ['Diversifying means…', ['Spreading your money across different investments', 'Putting it all in one place', 'Spending it all'], 0, 'It lowers risk.'],
    ['Money for a goal 20 years away can usually handle…', ['More risk', 'No risk at all', 'Only cash'], 0, 'Time helps ride out ups and downs.']
  ],
  'u5-l1': [
    ['Which pathway is a college diploma program?', ['A two-year program in a field like business or health', 'An apprenticeship only', 'A part-time job'], 0, 'Colleges offer diplomas.'],
    ['A university degree usually takes about…', ['4 years', '4 weeks', '1 year'], 0, 'Bachelor\'s degrees are often 4 years.'],
    ['An apprenticeship mixes…', ['Paid on-the-job training with classroom learning', 'Only classroom work', 'Only volunteering'], 0, 'Earn while you learn.'],
    ['Going straight into the workforce after high school is…', ['A valid pathway', 'Not allowed', 'Always a mistake'], 0, 'All pathways have value.'],
    ['Why check admission requirements early?', ['So you take the right high school courses', 'They never change', 'They don\'t matter'], 0, 'Some courses are required.'],
    ['A certificate program is usually…', ['Shorter, focused training for a specific job', 'Longer than a degree', 'A high school course'], 0, 'Certificates can take months.']
  ],
  'u5-l2': [
    ['A career with a "growing" outlook means…', ['More jobs are expected in the future', 'Fewer jobs are expected', 'It pays nothing'], 0, 'Growth = more openings.'],
    ['Job Bank is…', ['A Government of Canada website with job and career data', 'A bank for jobs', 'A store'], 0, 'It lists jobs and outlooks.'],
    ['Why compare wages in different regions?', ['Pay and demand can change by location', 'Wages are the same everywhere', 'It isn\'t useful'], 0, 'Location matters.'],
    ['Labour market information can help you…', ['Make realistic career plans', 'Guess randomly', 'Avoid planning'], 0, 'Data guides decisions.'],
    ['Your dream job is in demand only in Fort McMurray. You might need to…', ['Be willing to move or travel', 'Give up', 'Wait for it to come to you'], 0, 'Location is part of the reality check.'],
    ['Labour market data from a government website is…', ['A credible source', 'Fake', 'An ad'], 0, 'Government data is reliable.']
  ],
  'u5-l3': [
    ['A scholarship is usually based on…', ['Marks or achievement', 'Financial need only', 'Your height'], 0, 'Scholarships reward achievement.'],
    ['A student loan must be…', ['Paid back, often with interest', 'Never paid back', 'Paid back by your school'], 0, 'Loans are debt.'],
    ['A grant from the government is…', ['Money you don\'t pay back', 'A loan', 'A tax'], 0, 'Grants are often need-based.'],
    ['Living at home while going to school can…', ['Save a lot on rent and food', 'Cost more', 'Change your tuition'], 0, 'Living costs add up.'],
    ['Which costs should you add to tuition?', ['Books, fees, rent and food', 'Only tuition', 'Nothing'], 0, 'Find the full cost.'],
    ['Where can you search for scholarships?', ['Your school counsellor and scholarship websites', 'Nowhere', 'Only in Grade 12 math class'], 0, 'Start looking early.']
  ],
  'u5-l4': [
    ['A neighbour who works as a plumber is part of your…', ['Network', 'Tax bracket', 'Budget'], 0, 'Everyone you know counts.'],
    ['Volunteering helps your network because…', ['You meet people who see your work habits', 'It\'s unpaid', 'You work alone'], 0, 'Volunteers can become references.'],
    ['A good networking habit is…', ['Keeping in touch and saying thank you', 'Only calling when you need something', 'Never following up'], 0, 'Relationships need care.'],
    ['A "hidden job" is…', ['A job filled through networking, never advertised', 'A secret agent job', 'A job underground'], 0, 'Many jobs are never posted.'],
    ['Before a career conversation, you should…', ['Prepare a few questions', 'Wing it', 'Bring your résumé only'], 0, 'Preparation shows respect.'],
    ['Why is your reputation important for networking?', ['People recommend those they trust', 'It isn\'t', 'Only famous people have reputations'], 0, 'Be reliable and kind.']
  ],
  'u5-l5': [
    ['RAP lets Alberta high school students…', ['Start an apprenticeship and earn credits', 'Skip high school', 'Go to university at 14'], 0, 'Registered Apprenticeship Program.'],
    ['Math 30-1 is required for many…', ['University science and engineering programs', 'Part-time jobs', 'Driver\'s licences'], 0, 'Check program requirements.'],
    ['Taking the higher-level course in Grade 10 can…', ['Keep more options open later', 'Close options', 'Change nothing'], 0, 'It\'s easier to step down than up.'],
    ['Career and Technology Studies (CTS) courses let you…', ['Explore trades, technology and other careers', 'Skip math', 'Avoid all homework'], 0, 'Try out career areas.'],
    ['A course plan should be…', ['Reviewed and updated each year', 'Set in stone', 'Thrown away after Grade 9'], 0, 'Plans can change.'],
    ['Dual credit lets you…', ['Earn high school and post-secondary credit at once', 'Skip Grade 10', 'Get paid for homework'], 0, 'A head start on your pathway.']
  ]
});
