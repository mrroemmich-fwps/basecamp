/* ============================================================
   CEFL 9: content for the Practice section.
   Same format as practice-science8.js (see the notes there).
   Lessons with a number generator (tax credits, credit cards, DTI) also use it.
   ============================================================ */
window.PDATA = {
  course: 'CEFL 9', numeric: false, calcNotes: false,
  banks: {
    'u1-l1': [
      ['Automation means…', ['Technology doing tasks people used to do', 'Driving a car', 'Working from home'], 0, 'Robots, software and AI.'],
      ['Which job is hardest to automate?', ['An electrician wiring different houses', 'Sorting identical boxes'], 0, 'Every site is different.'],
      ['Globalization means labour markets…', ['Connect across countries', 'Close their borders'], 0, 'More competition, more opportunity.', 3]
    ],
    'u1-l2': [
      ['A company building a new plant that will hire 500 people signals a…', ['Growing industry', 'Declining industry'], 0, 'Investment means growth.'],
      ['Why look at where jobs are going, not just where they are now?', ['You\'ll be job hunting years from now', 'Jobs never change'], 0, 'Plan for the future market.'],
      ['Which clue can show an industry is declining?', ['Fewer jobs each year and plants closing', 'New hiring'], 0, 'Trends tell the story.', 3]
    ],
    'u1-l3': [
      ['Which source is most reliable for Canadian job data?', ['Job Bank', 'A random video'], 0, 'Official government data.'],
      ['"Make $10,000 a week from home, no experience!" is probably…', ['A scam', 'True'], 0, 'Too good to be true.'],
      ['Statistics Canada is…', ['Canada\'s national statistics agency', 'A sports league'], 0, 'Trusted data.', 3]
    ],
    'u1-l4': [
      ['Running a lawn-mowing business is…', ['Entrepreneurship', 'An apprenticeship', 'A pension'], 0, 'Starting your own business.'],
      ['A business plan describes…', ['What you\'ll sell, to whom, and how you\'ll make money', 'Your favourite food'], 0, 'It guides a business.'],
      ['Learning to cook from a grandparent is…', ['Informal learning', 'Formal learning'], 0, 'Outside a course or program.', 3]
    ],
    'u1-l5': [
      ['Many federal government jobs require…', ['English and French', 'Only Spanish', 'No language skills'], 0, 'Canada\'s two official languages.'],
      ['Speaking a second language at work is…', ['An asset', 'Useless'], 0, 'It helps you serve more people.'],
      ['Languages can be learned…', ['Both formally and informally', 'Only in university'], 0, 'Classes, family and community.', 3]
    ],
    'u2-l1': [
      ['"Must have own transportation" in a job posting is a…', ['Requirement', 'Benefit', 'Wage'], 0, 'You must meet it.'],
      ['"Asset: First Aid certificate" means…', ['Nice to have, but not required', 'Absolutely required'], 0, 'An asset gives you an edge.'],
      ['Reading a job posting carefully helps you…', ['Match your skills to what they need', 'Skip the application'], 0, 'Tailor your application.', 3]
    ],
    'u2-l2': [
      ['A personal brand is…', ['How you present your skills, values and goals', 'A clothing logo'], 0, 'It shapes how others see you.'],
      ['Which is a strong personal brand statement?', ['"Reliable, hard-working student who loves helping customers and learning new skills."', '"I need money."'], 0, 'It names skills and values.'],
      ['Your personal brand shows up in…', ['Your résumé, interviews and online profiles', 'Only your shoes'], 0, 'Be consistent everywhere.', 3]
    ],
    'u2-l3': [
      ['Tailoring your résumé means…', ['Changing it to fit each job', 'Using the same one for everything'], 0, 'Match what the employer wants.'],
      ['A job asks for customer service. You should highlight…', ['Times you helped people', 'Your favourite movie'], 0, 'Show the skills they want.'],
      ['Which résumé line is stronger?', ['"Served 50+ customers per shift at a busy concession."', '"Did stuff at a concession."'], 0, 'Specific and measurable.', 3]
    ],
    'u2-l4': [
      ['Which is a way to find job openings?', ['Job fairs and employer websites', 'Waiting at home'], 0, 'Search actively.'],
      ['Many jobs are never posted and are filled through…', ['Networking', 'Lottery'], 0, 'People you know.'],
      ['Employment services for newcomers help with…', ['Finding work and preparing applications', 'Nothing'], 0, 'Support is available.', 3]
    ],
    'u2-l5': [
      ['Your digital identity is…', ['How you appear online', 'Your bank PIN'], 0, 'Profiles, posts and comments.'],
      ['Before applying for a job, you should…', ['Check your public profiles', 'Post something rude'], 0, 'Employers often search applicants.'],
      ['Which online post could hurt your job chances?', ['A mean comment about a former boss', 'A photo of your volunteer work'], 0, 'Think before you post.', 3]
    ],
    'u2-l6': [
      ['Self-advocacy means…', ['Clearly explaining your own skills and needs', 'Bragging'], 0, 'Speak up for yourself.'],
      ['In an interview, you should…', ['Give specific examples of your skills', 'Answer with one word'], 0, 'Stories prove skills.'],
      ['Asking a question at the end of an interview shows…', ['Interest in the job', 'You weren\'t listening'], 0, 'It shows you care.', 3]
    ],
    'u3-l1': [
      ['A T4 slip shows…', ['Your employment income and deductions for the year', 'Your marks', 'Your bank balance'], 0, 'Employers send it by the end of February.'],
      ['Who do you file your tax return with?', ['The Canada Revenue Agency (CRA)', 'Your school', 'Your bank'], 0, 'The CRA collects federal taxes.'],
      ['Tax returns are usually due by…', ['April 30', 'December 25', 'July 1'], 0, 'For most people.', 3]
    ],
    'u3-l2': [
      ['A tax credit…', ['Lowers the tax you owe', 'Raises your income'], 0, 'Credits reduce tax owed.'],
      ['A tax deduction…', ['Lowers your taxable income', 'Is a bonus from your boss'], 0, 'Deductions reduce income that is taxed.'],
      ['Which is a common credit for students?', ['Tuition', 'Video games'], 0, 'Tuition credits help students.', 3]
    ],
    'u3-l3': [
      ['Withdrawals from which account are tax-free?', ['TFSA', 'RRSP'], 0, 'Tax-Free Savings Account.'],
      ['Contributing to which account lowers your taxable income now?', ['RRSP', 'TFSA'], 0, 'RRSP contributions are deductions.'],
      ['You must be how old to open a TFSA?', ['18', '12', '25'], 0, '18 or older.', 3]
    ],
    'u3-l4': [
      ['Tips from a restaurant job are…', ['Taxable income', 'Tax-free'], 0, 'All income counts.'],
      ['Self-employed people pay…', ['Both the employee and employer share of CPP', 'No CPP'], 0, 'No employer pays the other half.'],
      ['Money from a delivery app is…', ['Reportable income', 'A gift'], 0, 'Gig income must be reported.', 3]
    ],
    'u3-l5': [
      ['The Canada Child Benefit is delivered through…', ['The tax system', 'Your school', 'A lottery'], 0, 'It is based on income from tax returns.'],
      ['Which is one of the OHS rights?', ['The right to refuse unsafe work', 'The right to a raise'], 0, 'Know, participate, refuse.'],
      ['Why should teens file a tax return even with low income?', ['They may get a refund and qualify for benefits', 'There\'s no reason'], 0, 'Filing can pay off.', 3]
    ],
    'u4-l1': [
      ['Credit is…', ['The ability to borrow now and pay later', 'Money you already have'], 0, 'Borrowing.'],
      ['Which is a type of consumer credit?', ['Buy-now-pay-later', 'A savings account'], 0, 'BNPL is a form of credit.'],
      ['Debt usually costs more than the price because of…', ['Interest', 'Taxes on air'], 0, 'Interest is the cost of borrowing.', 3]
    ],
    'u4-l2': [
      ['Paying only the minimum on a credit card…', ['Takes much longer and costs more interest', 'Saves money'], 0, 'Interest keeps piling up.'],
      ['How do you avoid interest on credit card purchases?', ['Pay the full balance every month', 'Pay the minimum'], 0, 'No balance, no interest.'],
      ['Credit cards often charge about what yearly interest rate?', ['20%', '1%', '0%'], 0, 'Around 20% or more.', 3]
    ],
    'u4-l3': [
      ['Credit scores in Canada range from…', ['300 to 900', '0 to 100', '1 to 10'], 0, 'Higher is better.'],
      ['Which factor matters most for a credit score?', ['Payment history', 'Your favourite store', 'Your age'], 0, 'Paying on time.'],
      ['Using $900 of a $1,000 limit is…', ['High utilization, which can lower your score', 'Great for your score'], 0, 'Keep utilization low.', 3]
    ],
    'u4-l4': [
      ['Payday loans are…', ['Very expensive short-term loans', 'Free money'], 0, 'High fees can trap borrowers.'],
      ['In Alberta, a payday loan can cost up to how much per $100 borrowed?', ['$15', '$1', '$100'], 0, 'For about two weeks.'],
      ['A safer option in an emergency is…', ['An emergency savings fund', 'Several payday loans'], 0, 'Savings cost nothing to use.', 3]
    ],
    'u4-l5': [
      ['The avalanche method pays first the debt with the…', ['Highest interest rate', 'Smallest balance'], 0, 'It saves the most interest.'],
      ['The snowball method pays first the…', ['Smallest balance', 'Highest interest rate'], 0, 'Quick wins build motivation.'],
      ['A lower debt-to-income ratio is…', ['Healthier', 'Riskier'], 0, 'Less of your income goes to debt.', 3]
    ],
    'u5-l1': [
      ['Opportunity cost of school is…', ['Wages you give up while studying', 'The cost of books'], 0, 'Time in school is time not earning.'],
      ['Which lowers the true cost of school the most?', ['Living at home', 'Buying new textbooks'], 0, 'Rent is a big cost.'],
      ['True cost includes tuition, fees, books, living costs and…', ['Opportunity cost', 'Nothing else'], 0, 'Lost wages count.', 3]
    ],
    'u5-l2': [
      ['Return on investment compares…', ['Total cost with expected income and opportunities', 'Your marks'], 0, 'Is it worth it?'],
      ['A pathway with low cost and high demand has a…', ['Better financial ROI', 'Worse financial ROI'], 0, 'Lower cost, better job chances.'],
      ['Besides money, what should you weigh?', ['Whether you\'d enjoy the work', 'Nothing'], 0, 'Values matter.', 3]
    ],
    'u5-l3': [
      ['Student loans must be…', ['Repaid, usually after you finish school', 'Never repaid'], 0, 'They are debt.'],
      ['Which should you apply for first?', ['Scholarships, bursaries and grants', 'The biggest loan possible'], 0, 'Free money first.'],
      ['Before signing for a loan, you should know…', ['Your monthly payment and the interest', 'Nothing'], 0, 'Borrow only what you need.', 3]
    ],
    'u5-l4': [
      ['Work-integrated learning includes…', ['Co-ops, internships and apprenticeships', 'Only online classes'], 0, 'Learning on the job.'],
      ['Which pathway pays you while you learn?', ['Apprenticeship', 'Most full-time degrees'], 0, 'Apprentices are employees.'],
      ['If you move provinces, your credentials might…', ['Not be recognized everywhere', 'Become worth double'], 0, 'Check before you move.', 3]
    ],
    'u5-l5': [
      ['A contingency plan is…', ['A backup plan', 'Your first choice'], 0, 'If plan A doesn\'t work out.'],
      ['A strong rationale covers…', ['Money, personal fit and labour market data', 'Only what friends are doing'], 0, 'All three matter.'],
      ['Your primary pathway is…', ['Your first-choice plan', 'Your backup'], 0, 'Plan A.', 3]
    ]
  },

  vocab: {
    1: [['Automation', 'Technology doing tasks people used to do.'], ['Globalization', 'Labour markets and trade connecting across countries.'], ['Growing industry', 'An industry adding jobs.'], ['Declining industry', 'An industry losing jobs.'], ['Labour market information', 'Data about jobs, wages and demand.'], ['Entrepreneur', 'Someone who starts their own business.'], ['Business plan', 'A plan for what you\'ll sell, to whom, and how you\'ll make money.'], ['Bilingual', 'Able to speak two languages.']],
    2: [['Job posting', 'An ad describing a job and its requirements.'], ['Requirement', 'Something you must have for a job.'], ['Asset', 'Something nice to have that gives you an edge.'], ['Personal brand', 'How you present your skills, values and goals.'], ['Tailor', 'Change your résumé or cover letter to fit a job.'], ['Digital identity', 'How you appear online.'], ['Self-advocacy', 'Explaining your own skills and needs clearly.'], ['Interview', 'A meeting where an employer asks you questions.']],
    3: [['T4 slip', 'A form from your employer showing income and deductions for the year.'], ['Tax return', 'Your yearly filing with the CRA.'], ['CRA', 'Canada Revenue Agency: collects federal taxes.'], ['Tax credit', 'Lowers the tax you owe.'], ['Tax deduction', 'Lowers your taxable income.'], ['RRSP', 'Registered Retirement Savings Plan.'], ['TFSA', 'Tax-Free Savings Account.'], ['Self-employed', 'Working for yourself instead of an employer.']],
    4: [['Credit', 'The ability to borrow now and pay later.'], ['Debt', 'Money you owe.'], ['Interest rate', 'The yearly percent charged on borrowed money.'], ['Minimum payment', 'The smallest amount you must pay each month.'], ['Credit score', 'A number (300–900) showing your borrowing history.'], ['Utilization', 'How much of your credit limit you use.'], ['Payday loan', 'A very expensive short-term loan.'], ['Debt-to-income ratio', 'Monthly debt payments ÷ monthly gross income.']],
    5: [['True cost', 'Tuition, fees, books, living costs and opportunity cost.'], ['Opportunity cost', 'What you give up, like wages while in school.'], ['Return on investment', 'Comparing cost with expected income and opportunities.'], ['Student loan', 'Money borrowed for school that must be repaid.'], ['Grant', 'Free money for school, often based on need.'], ['Work-integrated learning', 'Co-ops, internships and apprenticeships.'], ['Credential', 'A diploma, certificate or licence.'], ['Contingency plan', 'A backup plan.']]
  },

  tasks: {
    1: { title: 'Industry Watch', story: 'A factory in your town is replacing 40 assembly workers with robots. At the same time, a new solar company is hiring technicians.', parts: [
      { q: 'What is happening at the factory?', o: ['Automation', 'Globalization', 'A strike'], a: 0, work: 'Machines are doing tasks people did.' },
      { q: 'The solar company is part of a…', o: ['Growing industry', 'Declining industry'], a: 0, work: 'It is adding jobs.' },
      { q: 'What advice would you give an assembly worker who is losing their job?', model: 'Look at growing industries like solar, use transferable skills like teamwork and following safety rules, and take a short course or apprenticeship to learn new technical skills. Talk to people in the field to learn about openings.', look: ['A growing industry or new skill', 'Transferable skills', 'A concrete next step'] }] },
    2: { title: 'Apply for the Job', story: 'A posting for a grocery clerk says: "Customer service experience an asset. Must be available weekends. Food handler certificate required."', parts: [
      { q: 'Which is a requirement?', o: ['Food handler certificate', 'Customer service experience'], a: 0, work: '"Required" means you must have it.' },
      { q: 'Before applying, you should check…', o: ['Your public social media profiles', 'Your shoe size'], a: 0, work: 'Employers may look you up.' },
      { q: 'Write a one-sentence personal brand statement for this job.', model: 'I\'m a friendly, reliable student with a food handler certificate who enjoys helping customers and can work every weekend.', look: ['Skills that match the posting', 'Values or personality', 'One clear sentence'] }] },
    3: { title: 'Tax Season', story: 'Sam, 18, earned $9,800 at a part-time job. His T4 shows $410 in income tax deducted. After filing, he owes only $0 in tax.', parts: [
      { q: 'Who sent Sam his T4?', o: ['His employer', 'The CRA', 'His bank'], a: 0, work: 'Employers send T4 slips.' },
      { q: 'How much will Sam get back as a refund?', a: 410, pre: '$', work: 'He paid $410 but owes $0, so all $410 comes back.' },
      { q: 'Sam wants to save his refund. Should he use an RRSP or a TFSA? Explain.', model: 'A TFSA is likely better. Sam\'s income is low, so an RRSP deduction wouldn\'t save him much tax, and a TFSA lets his money grow tax-free and be taken out anytime without tax.', look: ['A choice', 'A reason about his low income or flexibility'] }] },
    4: { title: 'Credit Card Trap', story: 'Lena has a $1,200 balance on a card charging 20% a year. She also has a $300 store card at 28%.', parts: [
      { q: 'About how much interest is charged on the $1,200 balance in one month?', a: 20, pre: '$', tol: 0.6, work: '1,200 × 0.20 ÷ 12 = 20.' },
      { q: 'Using the avalanche method, which debt should Lena pay first?', o: ['The store card at 28%', 'The $1,200 card at 20%'], a: 0, work: 'Highest rate first.' },
      { q: 'Write a 3-step plan to help Lena get out of debt and build good credit.', model: '1. Stop using both cards and pay at least the minimum on each. 2. Put every extra dollar on the 28% store card until it\'s gone, then the other card. 3. After that, use one card for small purchases and pay it in full every month.', look: ['Stop adding debt', 'A repayment method', 'A habit for good credit'] }] },
    5: { title: 'Plan A and Plan B', story: 'Noah is choosing between a 4-year university degree (tuition $7,000/year) and a 4-year electrician apprenticeship (paid while learning, about $3,000 total in school fees).', parts: [
      { q: 'What is the total tuition for the degree?', a: 28000, pre: '$', work: '7,000 × 4 = 28,000.' },
      { q: 'Which pathway has a lower opportunity cost?', o: ['The apprenticeship', 'The degree'], a: 0, work: 'Apprentices earn while they learn.' },
      { q: 'Write Noah\'s plan with a primary pathway, a backup and one reason.', model: 'Primary: electrician apprenticeship, starting with RAP in high school. Backup: an electrical engineering technology diploma. Reason: he earns while learning, electricians are in demand in Alberta, and he enjoys hands-on work.', look: ['A primary pathway', 'A backup', 'A reason (money, fit or labour market)'] }] }
  }
};
