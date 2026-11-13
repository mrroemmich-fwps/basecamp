/* ============================================================
   Grade 8 Science: content for the Practice section.
   Each lesson's own quick-check questions are added automatically.
   banks: extra questions as [question, [right answer, wrong, wrong], 0, why, level]
          (the right answer goes first; choices are shuffled on screen)
          or { q, a: number, why, unit } for typed answers.
   tasks: parts can be multiple choice (o, a), typed (a) or written (model, look).
   ============================================================ */
window.PDATA = {
  course: 'Grade 8 Science', numeric: false, calcNotes: false,
  banks: {
    'u1-l1': [
      ['What does WHMIS stand for?', ['Workplace Hazardous Materials Information System', 'World Health and Medical Information Service', 'Warning: Handle Materials In Safety'], 0, 'WHMIS is Canada\'s system for hazard labels and safety sheets at work.'],
      ['A product has a flame symbol. What should you do?', ['Keep it away from heat and sparks', 'Store it near the furnace', 'Shake it before using'], 0, 'The flame means it can catch fire easily.'],
      ['Where do you find detailed first aid info for a workplace chemical?', ['The Safety Data Sheet (SDS)', 'The price tag', 'The barcode'], 0, 'Every WHMIS product has an SDS.', 3]
    ],
    'u1-l2': [
      ['Salt water is a…', ['Solution', 'Pure substance', 'Mechanical mixture'], 0, 'The salt dissolves evenly, so it is a solution.'],
      ['Trail mix is a…', ['Mechanical mixture', 'Solution', 'Pure substance'], 0, 'You can see and pick out the different parts.'],
      ['Distilled water is a…', ['Pure substance', 'Mixture', 'Solution'], 0, 'It is only water and nothing else.', 3]
    ],
    'u1-l3': [
      ['A substance that dissolves in water is…', ['Soluble', 'Insoluble', 'Viscous'], 0, 'Soluble means it can dissolve.'],
      ['You add more drink crystals to the same amount of water. The drink becomes more…', ['Concentrated', 'Diluted', 'Viscous'], 0, 'More solute in the same water = more concentrated.'],
      ['Which usually dissolves faster in water?', ['Sugar in hot water', 'Sugar in ice water'], 0, 'Particles move faster when warm, so dissolving is faster.', 3]
    ],
    'u1-l4': [
      ['Which is the most viscous?', ['Honey', 'Water', 'Juice'], 0, 'Honey flows the slowest, so it is the thickest.'],
      ['What happens to motor oil\'s viscosity when it gets very cold?', ['It gets thicker and flows more slowly', 'It gets thinner', 'Nothing'], 0, 'Cold makes most liquids flow more slowly.'],
      ['Why do mechanics use different motor oils in winter and summer?', ['Viscosity changes with temperature', 'Winter oil is cheaper', 'Summer oil freezes'], 0, 'Seasonal oils are made to flow well at those temperatures.', 3]
    ],
    'u1-l5': [
      ['An object floats when it is…', ['Less dense than the liquid', 'More dense than the liquid', 'Heavier than the container'], 0, 'Less dense objects float.'],
      ['Oil floats on water because oil is…', ['Less dense than water', 'More dense than water', 'A solid'], 0, 'The less dense liquid rises to the top.'],
      ['The upward push of a liquid on an object is called…', ['Buoyant force', 'Viscosity', 'Concentration'], 0, 'Buoyancy is what helps boats float.', 3]
    ],
    'u1-l6': [
      ['Pressure is…', ['Force spread over an area', 'How thick a liquid is', 'How much dissolves'], 0, 'Pressure = force ÷ area.'],
      ['Why do snowshoes keep you from sinking?', ['They spread your weight over a bigger area', 'They are lighter than boots', 'They melt the snow'], 0, 'A bigger area means less pressure.'],
      ['How are oil and natural gas moved long distances in Alberta?', ['Pipelines with pumps', 'Buckets', 'Snowmobiles'], 0, 'Pumps push fluids through pipelines.', 3]
    ],
    'u2-l1': [
      ['Which river carries mountain water through Calgary?', ['The Bow River', 'The Mississippi', 'The Fraser'], 0, 'The Bow starts in the Rockies.'],
      ['About how much of Earth\'s fresh water is frozen?', ['Most of it', 'Almost none', 'Exactly half'], 0, 'Glaciers and ice caps hold most fresh water.'],
      ['Why does shrinking glacier ice matter to Alberta farms and towns?', ['Less melt water in late summer', 'More rain every day', 'Rivers get saltier'], 0, 'Glacier melt keeps rivers flowing in dry months.', 3]
    ],
    'u2-l2': [
      ['Boiling water during a boil-water advisory kills…', ['Bacteria', 'Salt', 'Chemicals'], 0, 'Boiling kills germs but doesn\'t remove salt or chemicals.'],
      ['Hard water has a lot of…', ['Dissolved minerals', 'Bacteria', 'Ice'], 0, 'Hardness measures minerals like calcium.'],
      ['Which process can turn salt water into fresh water?', ['Distillation', 'Freezing in the shade', 'Stirring'], 0, 'Boil, collect the steam, and the salt stays behind.', 3]
    ],
    'u2-l3': [
      ['Water vapour rising from a lake is…', ['Evaporation', 'Condensation', 'Precipitation'], 0, 'Liquid turning into a gas is evaporation.'],
      ['Rain and snow are called…', ['Precipitation', 'Runoff', 'Erosion'], 0, 'Water falling from clouds is precipitation.'],
      ['A pile of rock left behind by a glacier is a…', ['Moraine', 'Delta', 'Sandbar'], 0, 'Glaciers push and drop rock as moraines.', 3]
    ],
    'u2-l4': [
      ['A beaver\'s flat tail helps it…', ['Steer and swim', 'Breathe underwater', 'See in the dark'], 0, 'It works like a rudder.'],
      ['Salmon can live in both salt water and fresh water. That is an…', ['Adaptation', 'Erosion', 'Evaporation'], 0, 'Their bodies adjust to the salt.'],
      ['Hot summer weather can lower fish numbers because warm water holds less…', ['Oxygen', 'Salt', 'Light'], 0, 'Warm water holds less dissolved oxygen.', 3]
    ],
    'u2-l5': [
      ['Where should old paint thinner go?', ['A household hazardous waste drop-off', 'Down the sink', 'Into a storm drain'], 0, 'Drains lead to rivers and treatment plants.'],
      ['Plants along a creek bank help by…', ['Filtering runoff before it reaches the water', 'Making the water salty', 'Speeding up erosion'], 0, 'Buffer strips trap soil and fertilizer.'],
      ['Which water problem can\'t be solved by technology alone?', ['People littering and dumping', 'Testing for bacteria', 'Treating tap water'], 0, 'That takes people changing their habits.', 3]
    ],
    'u3-l1': [
      ['A mill wheel was powered by…', ['Moving water', 'Electricity', 'Batteries'], 0, 'Flowing water turned the wheel.'],
      ['What stays the same as machines change over time?', ['The need, like lifting or moving things', 'The energy source', 'The materials'], 0, 'People still need to lift, move and cut.'],
      ['Early airplane designs were mostly improved by…', ['Trial and error', 'Computer models', 'Satellites'], 0, 'Inventors tested, crashed and tried again.', 3]
    ],
    'u3-l2': [
      ['A jar lid is a…', ['Screw', 'Pulley', 'Wedge'], 0, 'The lid twists along a spiral thread.'],
      ['A flagpole uses a…', ['Pulley', 'Wedge', 'Screw'], 0, 'Pulling down on the rope raises the flag.'],
      ['A doorknob is a…', ['Wheel and axle', 'Lever', 'Inclined plane'], 0, 'The knob (wheel) turns the rod (axle).', 3]
    ],
    'u3-l3': [
      ['The pivot point of a lever is the…', ['Fulcrum', 'Load', 'Effort'], 0, 'The lever turns on the fulcrum.'],
      ['Moving the fulcrum closer to the load makes lifting…', ['Easier', 'Harder', 'Impossible'], 0, 'Your effort arm gets longer.'],
      { q: 'A lever lifts a 300 N load when you push with 60 N. What is the mechanical advantage?', a: 5, why: '300 ÷ 60 = 5.' }
    ],
    'u3-l4': [
      ['A big gear turning a small gear gives you more…', ['Speed', 'Force', 'Friction'], 0, 'The small gear spins faster.'],
      ['Work is measured in…', ['Joules', 'Newtons', 'Metres'], 0, 'Work (J) = force (N) × distance (m).'],
      { q: 'You push a box with 40 N for 3 m. How much work, in joules?', a: 120, why: '40 × 3 = 120 J.' }
    ],
    'u3-l5': [
      ['An efficient machine…', ['Wastes little energy', 'Is always the biggest', 'Is always the cheapest'], 0, 'Most of the energy goes into useful work.'],
      ['A guard over a saw blade is part of judging a machine\'s…', ['Safety', 'Cost', 'Colour'], 0, 'Guards protect hands.'],
      ['A machine breaks down every week. It scores low on…', ['Reliability', 'Speed', 'Size'], 0, 'Reliable machines keep working.', 3]
    ],
    'u4-l1': [
      ['Which is a living thing?', ['A mushroom', 'A rock', 'A cloud'], 0, 'Mushrooms grow, use energy and reproduce.'],
      ['All organisms need…', ['Energy from food', 'Sunlight only', 'Salt water'], 0, 'Every living thing needs energy.'],
      ['A spider gets food by building a web. A moose gets food by grazing. This shows…', ['Same need, different ways', 'They are the same organism', 'Neither needs food'], 0, 'Organisms meet the same needs in different ways.', 3]
    ],
    'u4-l2': [
      ['The basic unit of life is the…', ['Cell', 'Organ', 'Tissue'], 0, 'Everything living is made of cells.'],
      ['An amoeba is made of…', ['One cell', 'Millions of cells', 'No cells'], 0, 'It is a single-celled organism.'],
      ['Why do you start a microscope on the lowest power?', ['It is easier to find and focus the object', 'High power is broken', 'It saves the battery'], 0, 'Low power shows more area, then you zoom in.', 3]
    ],
    'u4-l3': [
      ['A group of the same kind of cells working together is a…', ['Tissue', 'System', 'Organism'], 0, 'Cells → tissues.'],
      ['The heart is an…', ['Organ', 'Cell', 'Organism'], 0, 'It is made of several tissues.'],
      ['Heart + blood + blood vessels make the…', ['Circulatory system', 'Digestive system', 'Respiratory system'], 0, 'They move blood around the body.', 3]
    ],
    'u4-l4': [
      ['The kidneys belong to which system?', ['Excretory', 'Respiratory', 'Circulatory'], 0, 'They filter waste out of the blood.'],
      ['Food is broken down into nutrients by the…', ['Digestive system', 'Respiratory system', 'Excretory system'], 0, 'Mouth, stomach and intestines do the work.'],
      ['Carbon dioxide leaves your body through the…', ['Lungs', 'Stomach', 'Kidneys'], 0, 'You breathe it out.', 3]
    ],
    'u4-l5': [
      ['What does the AQHI measure?', ['Air quality and health risk', 'Water temperature', 'Heart rate'], 0, 'The Air Quality Health Index.'],
      ['Which choice helps your respiratory system?', ['Avoiding smoke and vaping', 'Sitting all day', 'Skipping sleep'], 0, 'Smoke and vapour irritate the lungs.'],
      ['Insulin to treat diabetes was first used in 1922 by a team in…', ['Toronto', 'London', 'New York'], 0, 'A University of Toronto team.', 3]
    ],
    'u5-l1': [
      ['Light travels in…', ['Straight lines', 'Circles', 'Zigzags'], 0, 'That is why shadows have sharp edges.'],
      ['Which is an artificial light source?', ['A phone screen', 'The sun', 'A firefly'], 0, 'People made it.'],
      ['Light from the sun reaches Earth in about…', ['8 minutes', '8 seconds', '8 hours'], 0, 'Light is very fast, but the sun is very far.', 3]
    ],
    'u5-l2': [
      ['Light bouncing off a surface is…', ['Reflection', 'Refraction', 'Absorption'], 0, 'Bouncing = reflection.'],
      ['A periscope uses two…', ['Mirrors', 'Lenses', 'Prisms'], 0, 'Mirrors bounce light around a corner.'],
      ['Why does a car\'s side mirror say "objects are closer than they appear"?', ['It is curved to show a wider view', 'It is cracked', 'It is a lens'], 0, 'Curving outward makes things look smaller and farther.', 3]
    ],
    'u5-l3': [
      ['Clear window glass is…', ['Transparent', 'Translucent', 'Opaque'], 0, 'Almost all light passes through.'],
      ['A wooden door is…', ['Opaque', 'Translucent', 'Transparent'], 0, 'No light passes through.'],
      ['A rainbow happens because water droplets…', ['Refract different colours different amounts', 'Absorb all the light', 'Reflect only red'], 0, 'White light spreads into colours.', 3]
    ],
    'u5-l4': [
      ['A lens that is thicker in the middle is…', ['Convex', 'Concave', 'Flat'], 0, 'Convex lenses bulge out.'],
      ['People who are near-sighted wear…', ['Concave lenses', 'Convex lenses', 'Mirrors'], 0, 'Concave lenses help them see far away.'],
      ['A camera lens brings light rays together. It is…', ['Convex', 'Concave'], 0, 'Convex lenses focus light.', 3]
    ],
    'u5-l5': [
      ['The coloured part of your eye is the…', ['Iris', 'Retina', 'Pupil'], 0, 'The iris controls how much light gets in.'],
      ['X-rays help doctors see…', ['Bones', 'Feelings', 'Sound'], 0, 'X-rays pass through skin but not bone.'],
      ['Laser eye surgery reshapes the…', ['Cornea', 'Retina', 'Eyelid'], 0, 'Changing its shape changes how light focuses.', 3]
    ]
  },

  vocab: {
    1: [['Fluid', 'Anything that flows: liquids and gases.'], ['WHMIS', 'Canada\'s workplace system of hazard symbols and Safety Data Sheets.'], ['Solution', 'A mixture where one substance dissolves evenly in another.'], ['Concentration', 'How much of a substance is dissolved in a liquid.'], ['Viscosity', 'How thick a fluid is, or how slowly it flows.'], ['Density', 'How much mass is packed into a space.'], ['Buoyancy', 'The upward push of a fluid that helps things float.'], ['Pressure', 'Force spread over an area.']],
    2: [['Fresh water', 'Water with very little salt.'], ['Water cycle', 'Evaporation → condensation → precipitation → runoff, again and again.'], ['Evaporation', 'Liquid water turning into water vapour.'], ['Erosion', 'Wearing away land and carrying it off.'], ['Deposition', 'Dropping sand, mud or rock in a new place.'], ['Distillation', 'Boiling water and collecting the steam to remove salt.'], ['Adaptation', 'A feature that helps a living thing survive where it lives.'], ['Pollutant', 'Something that makes water, air or land dirty or harmful.']],
    3: [['Simple machine', 'A basic tool that makes work easier: lever, pulley, wheel and axle, inclined plane, wedge, screw.'], ['Compound machine', 'Several simple machines working together.'], ['Lever', 'A bar that pivots on a fulcrum.'], ['Fulcrum', 'The pivot point of a lever.'], ['Mechanical advantage', 'How many times a machine multiplies your force: load ÷ effort.'], ['Gear', 'A toothed wheel that passes turning force to another gear.'], ['Work', 'Force moving something a distance, measured in joules.'], ['Efficiency', 'How much of the energy put in becomes useful work.']],
    4: [['Organism', 'A living thing.'], ['Cell', 'The basic unit of life.'], ['Cell wall', 'The stiff outer layer of a plant cell.'], ['Chloroplast', 'The green part of a plant cell that makes food from sunlight.'], ['Tissue', 'A group of similar cells working together.'], ['Organ', 'Tissues working together to do a job, like the heart.'], ['Organ system', 'Organs working together, like the digestive system.'], ['Microscope', 'A tool with lenses for seeing tiny things.']],
    5: [['Reflection', 'Light bouncing off a surface.'], ['Refraction', 'Light bending as it passes into a new material.'], ['Transparent', 'Lets all light through.'], ['Translucent', 'Lets some light through.'], ['Opaque', 'Blocks light.'], ['Convex lens', 'Thicker in the middle; brings light together.'], ['Concave lens', 'Thinner in the middle; spreads light apart.'], ['Retina', 'The back of the eye, where images are captured.']]
  },

  tasks: {
    1: { title: 'Garage Clean-Out', story: 'You\'re helping clean out a garage. You find motor oil, paint thinner with a flame symbol, a jug of antifreeze, and a bucket of salty water from washing the truck.', parts: [
      { q: 'Which item must be kept far from the furnace and sparks?', o: ['Paint thinner (flame symbol)', 'The salty water', 'The empty bucket'], a: 0, work: 'The flame symbol means it is flammable.' },
      { q: 'Which flows more slowly on a cold day: motor oil or water?', o: ['Motor oil', 'Water'], a: 0, work: 'Oil is more viscous, and cold makes it thicker still.' },
      { q: 'Explain how you would safely get rid of the old paint thinner and antifreeze.', model: 'Keep them in their original labelled containers with the lids on, and take them to a household hazardous waste drop-off or eco-station. Never pour them down a drain, a storm sewer or on the ground.', look: ['Original, labelled containers', 'A hazardous waste drop-off or eco-station', 'Not down the drain or on the ground'] }] },
    2: { title: 'Lake Report', story: 'Your town\'s lake has had an algae bloom two summers in a row. Fish have been found dead near the shore in August.', parts: [
      { q: 'Which pollutant most likely fed the algae?', o: ['Fertilizer runoff from lawns and fields', 'Road salt in winter', 'Sand from the beach'], a: 0, work: 'Fertilizer adds nutrients that make algae grow fast.' },
      { q: 'Why did fish die after the bloom?', o: ['Rotting algae used up the oxygen', 'The water got too salty', 'The water froze'], a: 0, work: 'Decomposing algae uses oxygen fish need.' },
      { q: 'Suggest two things the town could do to protect the lake.', model: 'Plant buffer strips of native plants along the shore to catch runoff, and ask residents to use less lawn fertilizer. The town could also test the water regularly to catch problems early.', look: ['At least two actions', 'Each one connects to stopping runoff or monitoring'] }] },
    3: { title: 'Moving Day', story: 'You need to lift a 600 N fridge onto a truck. You have a long steel bar, a block of wood and a loading ramp.', parts: [
      { q: 'Using the bar and block as a lever, you push with 150 N to lift the fridge. What is the mechanical advantage?', a: 4, work: '600 ÷ 150 = 4.' },
      { q: 'Where should the block (fulcrum) go to make lifting easiest?', o: ['Close to the fridge', 'Close to your hands', 'In the exact middle'], a: 0, work: 'A fulcrum near the load gives a longer effort arm.' },
      { q: 'The ramp is 3 m long and you push with 250 N. How much work do you do, in joules?', a: 750, unit: 'J', work: '250 × 3 = 750 J.' }] },
    4: { title: 'Smoky Summer', story: 'Wildfire smoke is drifting over your town. The AQHI is 9 (high risk). Your soccer team has a practice tonight.', parts: [
      { q: 'Which body system is most at risk from the smoke?', o: ['Respiratory', 'Digestive', 'Skeletal'], a: 0, work: 'Smoke particles go deep into the lungs.' },
      { q: 'What is the safest plan for tonight?', o: ['Move practice indoors or cancel it', 'Run extra laps outside', 'Practise but skip water breaks'], a: 0, work: 'Hard breathing outside pulls in more smoke.' },
      { q: 'Explain how your heart and lungs work together when you exercise.', model: 'Working muscles need more oxygen, so you breathe faster and deeper (respiratory system) to get more oxygen into your blood, and your heart beats faster (circulatory system) to deliver that blood to your muscles and carry carbon dioxide away.', look: ['Muscles need more oxygen', 'Breathing speeds up', 'Heart pumps faster to deliver blood'] }] },
    5: { title: 'Eye Exam Day', story: 'Jordan squints to read the board from the back of the class but can read a phone up close easily.', parts: [
      { q: 'Jordan is…', o: ['Near-sighted', 'Far-sighted'], a: 0, work: 'Near things are clear and far things are blurry.' },
      { q: 'Which lenses will Jordan\'s glasses use?', o: ['Concave', 'Convex'], a: 0, work: 'Concave lenses spread light so far objects focus on the retina.' },
      { q: 'Compare how the eye and a phone camera capture an image.', model: 'Both let light in through an opening (pupil / aperture), control the amount of light (iris / diaphragm), focus it with a lens, and capture the image at the back (retina / image sensor).', look: ['Opening for light', 'Lens focuses light', 'Retina and sensor capture the image'] }] }
  }
};
