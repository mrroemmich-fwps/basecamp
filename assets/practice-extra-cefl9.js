/* Extra written questions so every lesson has at least 10 different ones (added Nov 2026).
   Same format as the banks in practice-cefl9.js: [question, choices (right one first), 0, why]
   or a typed number { q, a, pre, unit, why }. */
(function (add) { const B = window.PDATA.banks = window.PDATA.banks || {}; Object.keys(add).forEach(k => { B[k] = (B[k] || []).concat(add[k]); }); })({
  'u1-l1': [
    ['A self-driving tractor is an example of…', ['Automation', 'Globalization', 'Unionization'], 0, 'Machines doing tasks people did.'],
    ['Which task is easiest to automate?', ['Scanning items at a checkout', 'Counselling a student', 'Designing a new building'], 0, 'Repetitive tasks are easiest to automate.'],
    ['A Canadian company hires a designer in another country to work online. This shows…', ['Globalization', 'Automation', 'Inflation'], 0, 'Labour markets cross borders.'],
    ['Which skill helps protect you from automation?', ['Creativity and problem solving', 'Doing the same task over and over', 'Avoiding technology'], 0, 'Human skills are harder to automate.'],
    ['When robots are added to a factory, which new job might appear?', ['Robotics technician', 'Horse trainer', 'Telegraph operator'], 0, 'Someone must install and fix them.'],
    ['AI tools that write emails are changing jobs by…', ['Taking over some routine writing tasks', 'Making all jobs disappear', 'Doing nothing'], 0, 'Some tasks change; new skills are needed.']
  ],
  'u1-l2': [
    ['A declining industry has…', ['Fewer jobs each year', 'More jobs each year', 'The same jobs forever'], 0, 'Declining = shrinking.'],
    ['Government funding for clean energy could cause that industry to…', ['Grow', 'Disappear', 'Stay exactly the same'], 0, 'Policy shapes job trends.'],
    ['A stable industry…', ['Keeps about the same number of jobs', 'Grows quickly', 'Shrinks fast'], 0, 'Stable = steady.'],
    ['Which is a sign an industry is growing?', ['Many new job postings and training programs', 'Factories closing', 'Layoffs'], 0, 'Hiring signals growth.'],
    ['Why might health care keep growing in Alberta?', ['The population is getting older', 'Nobody gets sick', 'Hospitals are closing'], 0, 'Aging populations need more care.'],
    ['Investment means…', ['Companies spending money to grow, like building new plants', 'Saving coins in a jar', 'Closing a store'], 0, 'Investment often creates jobs.']
  ],
  'u1-l3': [
    ['ALIS is run by…', ['The Government of Alberta', 'A social media company', 'A video game studio'], 0, 'It\'s a trusted career source.'],
    ['Job Bank is run by…', ['The Government of Canada', 'A bank', 'A private ad company'], 0, 'It lists jobs and outlooks.'],
    ['A professional association (like for engineers or nurses) can give…', ['Reliable info about that career', 'Fake job ads', 'Only social posts'], 0, 'They know their field.'],
    ['A TikTok says "This job pays $200K and needs no training." You should…', ['Check it against ALIS or Job Bank', 'Quit school', 'Believe it'], 0, 'Verify with reliable data.'],
    ['Why check the date on labour market information?', ['Job markets change quickly', 'Dates don\'t matter', 'Older data is better'], 0, 'Use current data.'],
    ['Labour market information (LMI) can tell you…', ['Wages, job demand and where the jobs are', 'Tomorrow\'s weather', 'Sports scores'], 0, 'LMI helps career planning.']
  ],
  'u1-l4': [
    ['An entrepreneur is someone who…', ['Starts and runs their own business', 'Only works for others', 'Never takes risks'], 0, 'Entrepreneurs create businesses.'],
    ['Volunteering helps your career by…', ['Building skills and references', 'Paying a high wage', 'Replacing school'], 0, 'Experience counts even unpaid.'],
    ['A formal learning experience is…', ['A course or certified training', 'Learning from a friend', 'Watching TV'], 0, 'Formal = structured, often certified.'],
    ['Which is a risk of starting a business?', ['You might lose the money you put in', 'You always earn a lot', 'There is no risk'], 0, 'Entrepreneurs take risks.'],
    ['Profit is…', ['Money left after costs are paid', 'All the money a business takes in', 'A type of loan'], 0, 'Revenue − costs = profit.'],
    { q: 'Your dog-walking business earns $300 and costs $45 in supplies. What is the profit?', a: 255, pre: '$', why: '300 − 45 = $255.' }
  ],
  'u1-l5': [
    ['A bilingual employee can…', ['Serve more customers in their own language', 'Only work in Quebec', 'Never get hired'], 0, 'Languages are a valuable skill.'],
    ['Which job values a second language?', ['A tourism guide in Banff', 'A night-shift baker with no customers', 'A solo truck driver'], 0, 'Visitors speak many languages.'],
    ['Learning Cree from family is…', ['Informal language learning', 'Formal language learning', 'Not real learning'], 0, 'Family and community teach too.'],
    ['French immersion classes are…', ['Formal language learning', 'Informal learning', 'Not about language'], 0, 'They\'re structured courses.'],
    ['Why list languages on your résumé?', ['They can make you stand out to employers', 'Employers don\'t care', 'It\'s not allowed'], 0, 'Languages are an asset.'],
    ['Canada\'s two official languages are…', ['English and French', 'English and Spanish', 'French and Cree'], 0, 'Federal services are offered in both.']
  ],
  'u2-l1': [
    ['A qualification in a job posting is…', ['Training or a certificate you need', 'Your favourite hobby', 'The pay'], 0, 'Qualifications are often required.'],
    ['"Must be able to lift 25 kg" is a…', ['Physical requirement', 'Benefit', 'Pay rate'], 0, 'Some jobs have physical demands.'],
    ['"Required: valid Class 5 driver\'s licence" means…', ['You must have it to be hired', 'It\'s a bonus', 'It doesn\'t matter'], 0, 'Required = must have.'],
    ['Why use words from the posting in your résumé?', ['It shows you match what they want', 'To copy the whole posting', 'It isn\'t useful'], 0, 'Match their language.'],
    ['"Flexible availability, including weekends" means…', ['You may need to work weekends', 'You choose any hours', 'No weekend work'], 0, 'Read the details.'],
    ['If you meet most but not all of the requirements, you should…', ['Consider applying and highlight what you do have', 'Never apply', 'Lie about the rest'], 0, 'Many people apply without every asset.']
  ],
  'u2-l2': [
    ['A personal brand should be…', ['Honest and true to who you are', 'Made up to impress', 'A list of every hobby'], 0, 'Authentic brands are believable.'],
    ['Which word belongs in a brand statement?', ['Reliable', 'Whatever', 'Lazy'], 0, 'Use strong, positive qualities.'],
    ['Your brand includes your…', ['Skills, values and goals', 'Phone model', 'Shoe size'], 0, 'It\'s how you want others to see you.'],
    ['A brand statement is usually…', ['1–2 sentences', 'A full page', 'One word'], 0, 'Short and memorable.'],
    ['Your actions at school and work…', ['Show your brand every day', 'Have nothing to do with your brand', 'Only matter online'], 0, 'Your behaviour is your brand.'],
    ['Why ask others for feedback on your brand statement?', ['They can tell you if it sounds like you', 'To make it longer', 'It isn\'t useful'], 0, 'Others see you from the outside.']
  ],
  'u2-l3': [
    ['Which résumé section should go first for a job that needs a first aid certificate?', ['Certificates, with first aid listed', 'Hobbies', 'References'], 0, 'Put the most relevant info near the top.'],
    ['Using the job posting\'s keywords in your résumé can help…', ['It pass computer screening and catch the reader\'s eye', 'Nothing', 'It get rejected'], 0, 'Many employers scan for keywords.'],
    ['Which line shows measurable results?', ['"Served about 40 customers per shift."', '"Did serving."', '"Worked a lot."'], 0, 'Numbers make it concrete.'],
    ['Should you send the same résumé to every job?', ['No, adjust it for each job', 'Yes, always', 'Only on weekends'], 0, 'Tailor it.'],
    ['Your education, skills and experience together are your…', ['Human capital', 'Credit score', 'Net pay'], 0, 'Your value to employers.'],
    ['A tailored résumé for a daycare job would highlight…', ['Babysitting and first aid', 'Video game scores', 'Your car'], 0, 'Show the most relevant experience.']
  ],
  'u2-l4': [
    ['A job fair is…', ['An event where many employers meet job seekers', 'A carnival', 'A place to buy jobs'], 0, 'Bring résumés and ask questions.'],
    ['Checking an employer\'s own website can show…', ['Jobs not posted anywhere else', 'Only their logo', 'Nothing useful'], 0, 'Many employers post on their own site.'],
    ['Alberta Supports and employment centres offer…', ['Free help with résumés and job searches', 'Paid jobs only', 'Nothing'], 0, 'Free services are available.'],
    ['Telling your network you\'re looking for work helps because…', ['They may hear of openings first', 'It\'s embarrassing', 'They can\'t help'], 0, 'Many jobs are filled by referral.'],
    ['Dropping off a résumé in person can…', ['Make a good first impression', 'Never help', 'Get you in trouble'], 0, 'Dress neatly and be polite.'],
    ['Why keep track of where you apply?', ['So you can follow up and avoid repeating', 'It isn\'t useful', 'To brag'], 0, 'Stay organized.']
  ],
  'u2-l5': [
    ['A professional username or email uses…', ['Your name', 'A joke or insult', 'Random symbols'], 0, 'Keep it simple and professional.'],
    ['Things others post about you are…', ['Part of your digital identity too', 'Not your problem', 'Always private'], 0, 'Ask friends to remove posts you don\'t want.'],
    ['Searching your own name online helps you…', ['See what an employer might find', 'Get more followers', 'Hack accounts'], 0, 'Know your footprint.'],
    ['Which post is safe and positive?', ['A photo of you volunteering at a food bank', 'A rude comment about your boss', 'A post bragging about skipping work'], 0, 'Positive posts help your image.'],
    ['Privacy settings…', ['Help control who sees your posts, but aren\'t perfect', 'Make everything 100% private forever', 'Don\'t exist'], 0, 'Screenshots can still spread.'],
    ['Why might an employer care about your online posts?', ['Your behaviour reflects on their business', 'They don\'t', 'Only for fun'], 0, 'Workers represent the company.']
  ],
  'u2-l6': [
    ['The STAR method for interview answers stands for…', ['Situation, Task, Action, Result', 'Smile, Talk, Act, Repeat', 'Start, Try, Ask, Run'], 0, 'It helps you give clear examples.'],
    ['Self-advocacy in an interview could sound like…', ['"I work best with written instructions, so I take notes."', '"I don\'t know."', '"Whatever you want."'], 0, 'Explain what helps you do your best.'],
    ['Which is a good question to ask an interviewer?', ['"What does a typical day look like here?"', '"How soon can I take vacation?"', '"Do I have to come every day?"'], 0, 'Show interest in the work.'],
    ['Practising with a mock interview helps you…', ['Feel more confident and prepared', 'Forget answers', 'Skip the real interview'], 0, 'Practice builds confidence.'],
    ['When asked about your strengths, you should…', ['Name a strength and give a real example', 'Say "none"', 'List 20 words with no examples'], 0, 'Examples prove it.'],
    ['Body language in an interview should show…', ['Confidence: good posture and eye contact', 'Boredom', 'That you\'re in a hurry'], 0, 'Non-verbal signals matter.']
  ],
  'u3-l1': [
    ['The CRA is…', ['The Canada Revenue Agency, which collects taxes', 'A bank', 'A school board'], 0, 'You file your return with the CRA.'],
    ['If not enough tax was taken off your pay, when you file you will…', ['Owe the difference', 'Get a refund', 'Owe nothing'], 0, 'The return settles up.'],
    ['Box 14 on a T4 shows…', ['Your total employment income', 'Your address', 'Your boss\'s name'], 0, 'It\'s the main income box.'],
    ['Filing a tax return online is often done with…', ['Tax software or a free tax clinic', 'A text message', 'Social media'], 0, 'Free clinics help low-income filers.'],
    ['Why keep your T4 slips?', ['You need them to file your return', 'They are souvenirs', 'They aren\'t important'], 0, 'Keep tax records organized.']
  ],
  'u3-l3': [
    ['RRSP stands for…', ['Registered Retirement Savings Plan', 'Really Rich Savings Plan', 'Regular Retail Spending Plan'], 0, 'It\'s mainly for retirement.'],
    ['TFSA stands for…', ['Tax-Free Savings Account', 'Total Funds Spending Account', 'Teen Finance Savings App'], 0, 'Growth and withdrawals are tax-free.'],
    ['Money taken out of an RRSP is…', ['Taxed as income', 'Always tax-free', 'Never allowed'], 0, 'Tax is deferred until withdrawal.'],
    ['A TFSA is good for…', ['Flexible goals, like a car or emergency fund', 'Only retirement', 'Nothing'], 0, 'You can withdraw tax-free anytime.'],
    ['To contribute to an RRSP you need…', ['Earned income', 'To be 65', 'A business'], 0, 'Contribution room comes from earned income.'],
    ['Both an RRSP and a TFSA can hold…', ['Savings and investments like GICs, stocks and funds', 'Only cash', 'Only gold'], 0, 'They are accounts that hold investments.']
  ],
  'u3-l4': [
    ['Selling crafts online as a regular business is…', ['Taxable income', 'Never taxable', 'Illegal'], 0, 'All business income must be reported.'],
    ['A self-employed person pays both portions of CPP because…', ['There is no employer to pay the other half', 'It\'s a punishment', 'They don\'t pay any CPP'], 0, 'They are their own employer.'],
    ['A smart habit for gig workers is to…', ['Set aside part of each payment for taxes', 'Spend it all', 'Hide it from the CRA'], 0, 'Taxes come due later.'],
    ['Not reporting cash income is…', ['Illegal tax evasion', 'Smart saving', 'Totally fine'], 0, 'It\'s against the law.'],
    ['Gig work means…', ['Short-term or task-based jobs, often through apps', 'Only music concerts', 'A full-time salaried job'], 0, 'Like delivery or rideshare.'],
    ['Self-employed people can often deduct…', ['Business expenses, like supplies', 'Their vacations', 'Their groceries'], 0, 'Legitimate costs lower taxable income.']
  ],
  'u3-l5': [
    ['Overtime in Alberta is generally paid after…', ['8 hours a day or 44 hours a week', '2 hours a day', '100 hours a week'], 0, 'Employment Standards set overtime rules.'],
    ['If you are let go, Employment Standards may require…', ['Notice or termination pay', 'Nothing at all', 'A bonus'], 0, 'Termination rules protect workers.'],
    ['The GST/HST credit is paid to…', ['People with lower incomes who file a tax return', 'Everyone automatically without filing', 'Only businesses'], 0, 'You must file to get it.'],
    ['Income-tested means…', ['The amount depends on your income', 'Everyone gets the same', 'You take a test'], 0, 'Lower incomes get more.'],
    ['Vacation pay is…', ['Extra pay workers earn for time off', 'A bonus for travelling', 'Not a real thing'], 0, 'Employment Standards require it.'],
    ['If you think your employer broke Employment Standards, you can…', ['Contact Alberta Employment Standards for help', 'Do nothing', 'Post about it online only'], 0, 'There is a complaint process.']
  ],
  'u4-l1': [
    ['A line of credit is…', ['A set amount you can borrow and repay as needed', 'A gift', 'A savings account'], 0, 'You pay interest on what you use.'],
    ['Buy-now-pay-later plans can be risky because…', ['It\'s easy to overspend and miss payments', 'They are free money', 'They never charge fees'], 0, 'Missed payments add fees.'],
    ['Interest is…', ['The cost of borrowing money', 'Free money from the bank', 'A type of tax'], 0, 'Lenders charge interest.'],
    ['Good debt is often described as…', ['Borrowing for something that grows in value, like education', 'Borrowing for a vacation', 'Any credit card debt'], 0, 'It can pay off over time.'],
    { q: 'You borrow $1,000 at 10% simple interest for one year. How much interest do you pay?', a: 100, pre: '$', why: '10% of 1,000 = $100.' },
    ['Before using credit, ask yourself…', ['Can I pay this back on time?', 'Is it shiny?', 'Are my friends doing it?'], 0, 'Only borrow what you can repay.']
  ],
  'u4-l3': [
    ['A higher credit score means…', ['Easier borrowing and lower interest rates', 'Higher interest rates', 'No effect'], 0, 'Lenders trust higher scores.'],
    ['Credit utilization is…', ['How much of your credit limit you use', 'How many cards you own', 'Your income'], 0, 'Keep it low.'],
    ['Paying your bills on time helps your credit score because…', ['Payment history is the biggest factor', 'It doesn\'t help', 'Only income counts'], 0, 'On-time payments matter most.'],
    ['Applying for many new cards at once can…', ['Lower your score', 'Raise your score a lot', 'Have no effect'], 0, 'Many new applications look risky.'],
    ['Who checks your credit score?', ['Lenders, landlords and sometimes employers', 'Your teacher', 'Nobody']
      , 0, 'It affects renting and borrowing.']
  ],
  'u4-l4': [
    ['A payday loan is usually due…', ['On your next payday, in about two weeks', 'In 10 years', 'Never'], 0, 'Short-term and expensive.'],
    { q: 'A payday loan charges $15 per $100. How much does borrowing $300 cost?', a: 45, pre: '$', why: '3 × $15 = $45 for about two weeks.' },
    ['A debt cycle is when…', ['You borrow again to pay off old debt, over and over', 'You pay off all debt', 'You save money'], 0, 'It\'s hard to escape.'],
    ['Which is a red flag of predatory lending?', ['"No credit check! Cash in 10 minutes!"', 'Clear interest rates and terms', 'A bank explaining all costs'], 0, 'Too easy is a warning sign.'],
    ['An emergency fund helps you avoid…', ['Needing a payday loan', 'Saving money', 'Budgeting'], 0, 'Savings are your safety net.'],
    ['A credit union or bank loan is usually…', ['Cheaper than a payday loan', 'More expensive than a payday loan', 'Not available to anyone'], 0, 'Compare before borrowing.']
  ],
  'u5-l1': [
    ['Tuition is…', ['The cost of the courses themselves', 'Rent', 'Food'], 0, 'Only part of the true cost.'],
    ['Living at home during school lowers…', ['Living costs like rent', 'Tuition', 'Book prices'], 0, 'Rent is a big cost.'],
    { q: 'Tuition $6,000, fees $800, books $1,200. What is the total before living costs?', a: 8000, pre: '$', why: '6,000 + 800 + 1,200 = $8,000.' },
    ['If you could earn $25,000 working instead of studying, that $25,000 is the…', ['Opportunity cost', 'Tuition', 'Scholarship'], 0, 'It\'s what you give up.'],
    ['Studying close to home can lower the true cost because…', ['Transportation and housing may cost less', 'Tuition is free', 'Books are free'], 0, 'Living costs vary by location.'],
    ['Working part-time during school can…', ['Lower how much you need to borrow', 'Raise tuition', 'Have no effect'], 0, 'Income offsets costs.']
  ],
  'u5-l2': [
    ['ROI stands for…', ['Return on investment', 'Rate of interest', 'Report on income'], 0, 'Compares cost with payoff.'],
    ['A high-cost program in a low-demand field likely has a…', ['Lower financial ROI', 'Higher financial ROI', 'No cost'], 0, 'Fewer jobs mean slower payback.'],
    ['Graduation rate matters for ROI because…', ['Not finishing means paying costs without the credential', 'It doesn\'t matter', 'Everyone graduates'], 0, 'Completion affects payoff.'],
    ['A payback estimate tells you…', ['How long until extra earnings cover the cost of school', 'How fast you can spend', 'Your credit score'], 0, 'Time to break even.'],
    ['Enjoying your work is…', ['A personal value worth weighing with money', 'Not important', 'Only for rich people'], 0, 'Fit matters as much as pay.'],
    ['Where can you find wages to estimate ROI?', ['ALIS or Job Bank', 'A meme', 'A movie'], 0, 'Use reliable LMI.']
  ],
  'u5-l3': [
    ['Which do you NOT pay back?', ['A bursary', 'A student loan', 'A line of credit'], 0, 'Bursaries are free money.'],
    ['Borrow only what you need because…', ['Every dollar borrowed must be repaid', 'Banks prefer it', 'Loans are free'], 0, 'Debt follows you after school.'],
    ['Student loans usually start being repaid…', ['After you finish school', 'Before your first class', 'Never'], 0, 'There\'s often a grace period.'],
    ['Why apply for scholarships before loans?', ['Free money lowers how much you need to borrow', 'Loans are better', 'Scholarships cost money'], 0, 'Use free money first.'],
    ['Knowing your monthly loan payment helps you…', ['Plan your budget after school', 'Spend more now', 'Avoid working'], 0, 'Plan ahead.'],
    ['Student aid in Canada comes from…', ['Both the federal and provincial governments', 'Only your school', 'Only banks'], 0, 'There are federal and Alberta programs.'],
    ['If you have trouble repaying a student loan, you should…', ['Contact the lender about repayment help programs', 'Ignore it', 'Hide'], 0, 'There are repayment assistance programs.']
  ],
  'u5-l4': [
    ['A co-op program includes…', ['Paid work terms as part of your studies', 'Only classes', 'No work'], 0, 'You alternate study and work.'],
    ['An internship is…', ['Work experience in your field, often during or after training', 'A vacation', 'A type of loan'], 0, 'Some are paid, some aren\'t.'],
    ['Apprentices earn money by…', ['Working on the job while training', 'Taking tests only', 'Selling textbooks'], 0, 'Earn while you learn.'],
    ['Credential recognition means…', ['Your training is accepted in a new place', 'You get a new name', 'You pay less tax'], 0, 'Check before you move.'],
    ['Work-integrated learning can improve your job chances because…', ['You graduate with real experience and contacts', 'It replaces your diploma', 'Employers don\'t care'], 0, 'Experience and network.'],
    ['Is it ever too late to change careers?', ['No, many adults retrain and change paths', 'Yes, after 25', 'Yes, after Grade 9'], 0, 'Learning is lifelong.']
  ],
  'u5-l5': [
    ['Plan A is your…', ['Primary pathway', 'Backup', 'Emergency fund'], 0, 'Your first choice.'],
    ['Why have a Plan B?', ['In case Plan A doesn\'t work out', 'To confuse yourself', 'It\'s not needed'], 0, 'Backups reduce stress.'],
    ['A rationale is…', ['Your reasons for choosing a plan', 'A type of loan', 'A school course'], 0, 'Explain why.'],
    ['Labour market data in your rationale shows…', ['The pathway leads to real jobs', 'Your favourite colour', 'Nothing'], 0, 'Evidence supports your plan.'],
    ['Personal fit means…', ['The pathway matches your interests, strengths and values', 'The uniform fits', 'It\'s the cheapest'], 0, 'Fit matters for success.'],
    ['A good plan should be…', ['Reviewed and updated as you learn more', 'Never changed', 'Kept secret'], 0, 'Plans grow with you.']
  ]
});
