/* Extra written questions so every lesson has at least 10 different ones (added Nov 2026).
   Same format as the banks in practice-science8.js: [question, choices (right one first), 0, why]. */
(function (add) { const B = window.PDATA.banks = window.PDATA.banks || {}; Object.keys(add).forEach(k => { B[k] = (B[k] || []).concat(add[k]); }); })({
  'u1-l1': [
    ['A skull and crossbones symbol means the product…', ['Can poison or kill you', 'Is safe to drink', 'Is only a fire risk'], 0, 'It warns of acute toxicity (poison).'],
    ['"Caution" on a household label means…', ['A lower level of danger than "Danger"', 'The highest level of danger', 'No danger at all'], 0, '"Danger" is the most serious; "Caution" is less serious but still a warning.'],
    ['Where should cleaning products be stored at home?', ['In their original containers, away from kids and food', 'In a pop bottle in the fridge', 'Mixed together in one bucket'], 0, 'Original labelled containers, out of reach and away from food.'],
    ['A symbol of a hand being eaten away means the product is…', ['Corrosive (it can burn skin and eyes)', 'Flammable', 'Safe to touch'], 0, 'Corrosive products damage skin, eyes and metal.'],
    ['Before using a new chemical at a job, you should…', ['Read the label and the Safety Data Sheet', 'Smell it to see what it is', 'Ask a friend to try it first'], 0, 'The label and SDS tell you the dangers and how to stay safe.']
  ],
  'u1-l2': [
    ['A bowl of cereal with milk is a…', ['Mechanical mixture', 'Solution', 'Pure substance'], 0, 'You can see the different parts.'],
    ['Pure gold is a…', ['Pure substance', 'Mechanical mixture', 'Solution'], 0, 'It has only one kind of particle.'],
    ['Air is a mixture of gases. Because you can\'t see the separate parts, it is a…', ['Solution', 'Mechanical mixture', 'Pure substance'], 0, 'The parts are evenly mixed and you can\'t see them.'],
    ['In sugar water, the water is the…', ['Solvent', 'Solute', 'Mixture'], 0, 'The solvent does the dissolving.'],
    ['Oil and vinegar salad dressing separates into layers. It is a…', ['Mechanical mixture', 'Solution', 'Pure substance'], 0, 'You can see the two separate layers.']
  ],
  'u1-l3': [
    ['Sand does not dissolve in water. Sand is…', ['Insoluble', 'Soluble', 'A solvent'], 0, 'Insoluble means it won\'t dissolve.'],
    ['Stirring helps sugar dissolve because it…', ['Brings fresh water in contact with the sugar', 'Makes the sugar heavier', 'Cools the water'], 0, 'Stirring spreads the solute through the solvent.'],
    ['Which drink is more concentrated?', ['20 g of crystals in 250 mL', '10 g of crystals in 250 mL'], 0, 'More solute in the same volume = more concentrated.'],
    ['A solution that can\'t dissolve any more solute is…', ['Saturated', 'Diluted', 'Insoluble'], 0, 'Saturated means it is holding all it can.'],
    ['Adding more water to a solution makes it…', ['More dilute (less concentrated)', 'More concentrated', 'Saturated'], 0, 'The same solute is spread through more water.']
  ],
  'u1-l4': [
    ['Which has the lowest viscosity?', ['Water', 'Honey', 'Ketchup'], 0, 'Water is thin and flows fast.'],
    ['Warming a fluid usually makes its viscosity…', ['Go down (it flows faster)', 'Go up (it flows slower)', 'Stay exactly the same'], 0, 'Warm syrup pours faster than cold syrup.'],
    ['Flow rate means…', ['How fast a fluid moves', 'How heavy a fluid is', 'What colour a fluid is'], 0, 'Flow rate is how much flows in a certain time.'],
    ['Why is thick paint useful on a wall?', ['It doesn\'t drip as much', 'It dries instantly', 'It is lighter'], 0, 'High viscosity paint stays where you put it.'],
    ['Lava that flows slowly has…', ['High viscosity', 'Low viscosity', 'No viscosity'], 0, 'Slow and thick = high viscosity.'],
    ['In a race down a ramp, which would finish first?', ['Water', 'Shampoo', 'Molasses'], 0, 'The lowest viscosity flows fastest.']
  ],
  'u1-l5': [
    ['A rock sinks in water because it is…', ['More dense than water', 'Less dense than water', 'Too small'], 0, 'More dense than 1 g/mL → sinks.'],
    ['An object has a mass of 50 g and a volume of 25 mL. Its density is…', ['2 g/mL', '0.5 g/mL', '75 g/mL'], 0, 'density = mass ÷ volume = 50 ÷ 25 = 2 g/mL.'],
    ['Huge steel ships float because…', ['Their shape holds lots of air, so the whole ship is less dense than water', 'Steel is lighter than water', 'Ships are pulled up by the wind'], 0, 'The hull plus the air inside has a low overall density.'],
    ['Ice floats on a lake because ice is…', ['Less dense than liquid water', 'More dense than water', 'Hotter than water'], 0, 'Water expands when it freezes, so ice is less dense.'],
    ['Buoyancy is…', ['The upward push of a fluid on an object', 'The weight of the water', 'How fast an object sinks'], 0, 'Buoyant force pushes up.'],
    ['Which will float in water?', ['A piece of wood (0.6 g/mL)', 'A coin (8 g/mL)', 'A marble (2.5 g/mL)'], 0, 'Less than 1 g/mL floats.']
  ],
  'u1-l6': [
    ['Pumping more air into a bike tire…', ['Raises the pressure inside', 'Lowers the pressure inside', 'Doesn\'t change the pressure'], 0, 'More air squeezed into the same space = more pressure.'],
    ['A sharp knife cuts better than a dull one because…', ['The force pushes on a smaller area, so the pressure is higher', 'It is heavier', 'It is colder'], 0, 'pressure = force ÷ area. Smaller area → more pressure.'],
    ['Hydraulic systems (like a car lift) use…', ['A liquid under pressure to move heavy things', 'Magnets to float cars', 'Wind to push things up'], 0, 'Hydraulics use pressure in liquids.'],
    ['Pneumatic tools (like a nail gun) use…', ['Air under pressure', 'Water under pressure', 'Sunlight'], 0, 'Pneumatic = air or gas.'],
    ['Why are pipeline leaks checked carefully?', ['Leaks can harm land, water and animals', 'Pipelines are made of glass', 'Leaks make oil cheaper'], 0, 'Spills can damage ecosystems.'],
    ['A truck tire that is low on pressure…', ['Wastes fuel and wears out faster', 'Makes the truck faster', 'Is always safer'], 0, 'Correct tire pressure saves fuel and is safer.']
  ],
  'u2-l1': [
    ['About how much of Earth\'s water is fresh water?', ['About 3%', 'About 50%', 'About 97%'], 0, 'Most water (97%) is salty ocean water.'],
    ['A glacier is…', ['A huge, slow-moving body of ice', 'A salty lake', 'An underground river'], 0, 'Glaciers are frozen fresh water that moves slowly.'],
    ['Water stored underground in soil and rock is called…', ['Groundwater', 'Salt water', 'Runoff'], 0, 'Many farms and towns use wells to reach groundwater.'],
    ['Alberta\'s rivers get much of their water from…', ['Snow and glaciers melting in the Rocky Mountains', 'The Pacific Ocean', 'Underground volcanoes'], 0, 'Mountain snowmelt and glaciers feed rivers like the Bow.'],
    ['Why is fresh water so important to protect?', ['Less than 1% of Earth\'s water is easy for people to use', 'There is an endless supply', 'Only fish need it'], 0, 'Usable fresh water is very limited.'],
    ['Which is salt water?', ['The Atlantic Ocean', 'The Bow River', 'Lake Louise'], 0, 'Oceans are salt water.']
  ],
  'u2-l2': [
    ['Pure water has a pH of about…', ['7 (neutral)', '1 (very acidic)', '14 (very basic)'], 0, 'pH 7 is neutral.'],
    ['Low dissolved oxygen in a lake means…', ['Fish may not have enough oxygen to survive', 'The water is extra clean', 'There will be more fish'], 0, 'Fish breathe oxygen dissolved in water.'],
    ['A water treatment plant…', ['Cleans water so it is safe to drink', 'Adds salt to drinking water', 'Heats water for swimming pools only'], 0, 'Treatment removes dirt and kills germs.'],
    ['Filtering water through sand and gravel removes…', ['Dirt and small particles', 'All bacteria and salt', 'Dissolved sugar'], 0, 'Filters catch solid bits, but not everything dissolved.'],
    ['Why do people test well water?', ['To check for bacteria and harmful minerals', 'To make it taste sweet', 'To find gold'], 0, 'Well water should be tested for safety.'],
    ['Hard water can leave white crusty buildup on kettles because it has lots of…', ['Minerals like calcium', 'Sugar', 'Oxygen'], 0, 'Hard water = lots of dissolved minerals.']
  ],
  'u2-l3': [
    ['Water soaking into the ground is part of…', ['Groundwater (infiltration)', 'Evaporation', 'Condensation'], 0, 'Some precipitation soaks into the soil.'],
    ['Water running over the ground into rivers is called…', ['Runoff', 'Evaporation', 'Deposition'], 0, 'Runoff flows over the surface.'],
    ['Water vapour turning into tiny droplets on a cold glass is…', ['Condensation', 'Evaporation', 'Precipitation'], 0, 'Gas turning back into liquid = condensation.'],
    ['A river carving a deep valley over thousands of years is…', ['Erosion', 'Deposition', 'Condensation'], 0, 'Erosion wears land away.'],
    ['A river delta forms where a river…', ['Slows down and deposits sand and mud', 'Freezes into a glacier', 'Speeds up and erodes rock'], 0, 'Slow water drops what it carried.'],
    ['What gives the water cycle its energy?', ['The sun', 'The moon', 'Wind turbines'], 0, 'The sun heats water so it evaporates.']
  ],
  'u2-l4': [
    ['A duck\'s webbed feet help it…', ['Paddle through water', 'Climb trees', 'Stay warm in the desert'], 0, 'Webbed feet push water like paddles.'],
    ['Why do many fish have a streamlined (smooth, pointed) shape?', ['To move easily through water', 'To float on top like a boat', 'To dig in sand'], 0, 'A smooth shape reduces drag.'],
    ['A population is…', ['All the members of one species living in one area', 'Every living thing on Earth', 'One single animal'], 0, 'For example, all the trout in one lake.'],
    ['Why would a fish population drop after a lake is polluted?', ['The water can no longer meet the fish\'s needs', 'The fish all move to the ocean', 'Fish like pollution'], 0, 'Pollution can lower oxygen and harm food sources.'],
    ['Thick fur and fat help a muskrat…', ['Stay warm in cold water', 'See in the dark', 'Breathe underwater'], 0, 'Fur and fat insulate against cold.'],
    ['A loon has heavy, solid bones. That helps it…', ['Dive deep underwater for fish', 'Fly higher than eagles', 'Walk faster on land'], 0, 'Heavier bones make diving easier.'],
    ['Which is a freshwater animal in Alberta?', ['Northern pike', 'Shark', 'Octopus'], 0, 'Pike live in Alberta lakes and rivers.']
  ],
  'u2-l5': [
    ['Which helps keep lakes clean?', ['Picking up dog waste and litter near water', 'Washing your car next to a storm drain', 'Dumping leftover paint in the sink'], 0, 'Waste near water can wash into it.'],
    ['Storm drains in the street usually lead…', ['Straight to rivers and lakes, without treatment', 'To a water treatment plant', 'To the ocean only'], 0, 'That\'s why only rain should go down them.'],
    ['Taking shorter showers helps by…', ['Saving water', 'Making the water hotter', 'Cleaning the river'], 0, 'Less water used means less to pump and treat.'],
    ['A water treatment plant cleans water…', ['Before we drink it and after we use it', 'Only in the summer', 'By adding fertilizer'], 0, 'Treatment plants clean drinking water and wastewater.'],
    ['Why might a farmer plant trees and grass along a creek?', ['To stop soil and fertilizer from washing into the water', 'To make the creek wider', 'To keep fish out'], 0, 'Plant roots hold soil and filter runoff.'],
    ['Which is a pollutant that can come from a house?', ['Soap and chemicals going down drains', 'Fresh rain water', 'Clean ice'], 0, 'Household chemicals can end up in water.']
  ],
  'u3-l1': [
    ['Before engines, heavy loads were often pulled by…', ['Animals like horses and oxen', 'Electric motors', 'Solar panels'], 0, 'Muscle power came first: people, then animals.'],
    ['Windmills use energy from…', ['Moving air', 'Burning coal', 'Batteries'], 0, 'Wind turns the blades.'],
    ['Why have tractors replaced horses on most farms?', ['They can do more work faster', 'They are always cheaper to buy', 'Horses cannot pull'], 0, 'Engines can do much more work in less time.'],
    ['A cordless drill gets its energy from…', ['A battery', 'A water wheel', 'Steam'], 0, 'Batteries store electrical energy.'],
    ['What usually leads people to invent a new machine?', ['A need or a problem to solve', 'Boredom', 'A rule from the government'], 0, 'Machines are made to meet a need.'],
    ['A steam engine works by…', ['Burning fuel to boil water, and the steam pushes parts', 'Catching the wind', 'Using sunlight on panels'], 0, 'Steam pressure moves pistons.']
  ],
  'u3-l2': [
    ['A screwdriver turning a screw uses a…', ['Wheel and axle', 'Pulley', 'Ramp'], 0, 'The handle is the wheel and the shaft is the axle.'],
    ['A wheelbarrow is a…', ['Lever', 'Pulley', 'Wedge'], 0, 'It pivots on the wheel (the fulcrum).'],
    ['A knife blade is a…', ['Wedge', 'Pulley', 'Screw'], 0, 'A wedge splits or cuts things apart.'],
    ['A seesaw is a…', ['Lever', 'Wedge', 'Screw'], 0, 'It balances on a fulcrum in the middle.'],
    ['Simple machines make work easier by…', ['Changing the size or direction of a force', 'Making things weigh nothing', 'Creating energy from nothing'], 0, 'They trade distance for force, or change direction.'],
    ['A ramp to a building\'s door is an…', ['Inclined plane', 'Pulley', 'Axle'], 0, 'An inclined plane is a slope.']
  ],
  'u3-l5': [
    ['A machine that uses less fuel to do the same job is more…', ['Efficient', 'Dangerous', 'Expensive'], 0, 'Efficient = less energy wasted.'],
    ['Which question checks a machine\'s effect on the environment?', ['Does it pollute or make lots of waste?', 'Is it a nice colour?', 'Is it popular?'], 0, 'Environmental impact is one of the criteria.'],
    ['A reliable machine…', ['Works well every time you use it', 'Breaks often but is cheap', 'Is always the newest model'], 0, 'Reliable = dependable.'],
    ['Most of the energy wasted by a machine usually becomes…', ['Heat (often from friction)', 'More fuel', 'Light only'], 0, 'Friction turns some energy into heat.'],
    ['Oiling the parts of a machine helps it…', ['Run smoother with less friction', 'Get heavier', 'Use more energy'], 0, 'Less friction means less wasted energy.'],
    ['Criteria are…', ['The standards used to judge a design', 'The parts of a machine', 'The price tag'], 0, 'Engineers use criteria to compare designs.'],
    ['Two can openers both work. One costs $8, the other $40. If you only use it once a month, the best choice is probably…', ['The $8 one', 'The $40 one', 'Buying both'], 0, 'Cost is a criterion too.'],
    ['An emergency stop button is part of judging a machine\'s…', ['Safety', 'Colour', 'Speed'], 0, 'It protects the person using it.']
  ],
  'u4-l1': [
    ['A tree responds to its surroundings by…', ['Growing toward light', 'Running from danger', 'Talking'], 0, 'Plants grow toward sunlight.'],
    ['Which is a waste product animals get rid of?', ['Carbon dioxide', 'Oxygen', 'Sunlight'], 0, 'Animals breathe out carbon dioxide.'],
    ['Which shows that a living thing reproduces?', ['A dandelion makes seeds', 'A rock gets smaller', 'A car is built'], 0, 'Making offspring or seeds is reproduction.'],
    ['Fire grows and uses oxygen. Why is fire NOT alive?', ['It isn\'t made of cells and can\'t reproduce on its own', 'It is too hot', 'It is orange'], 0, 'Living things are made of cells.'],
    ['A system is…', ['A group of parts working together', 'One single part', 'Something that is not alive'], 0, 'Each part has a job, and they work together.'],
    ['A fish gets oxygen from water. A deer gets oxygen from…', ['Air, using its lungs', 'Water, using gills', 'Soil'], 0, 'Different organisms meet the same need in different ways.']
  ],
  'u4-l2': [
    ['The part of a cell that controls what it does is the…', ['Nucleus', 'Cell wall', 'Chloroplast'], 0, 'The nucleus is the control centre.'],
    ['The cell membrane…', ['Controls what goes in and out of the cell', 'Makes food from sunlight', 'Makes the cell green'], 0, 'It is like a gatekeeper.'],
    ['Why are plant stems stiff?', ['Their cells have a strong cell wall', 'They are full of bones', 'They have no cells'], 0, 'Cell walls support the plant.'],
    ['To see cells, scientists use a…', ['Microscope', 'Telescope', 'Periscope'], 0, 'Most cells are too small to see without one.'],
    ['Cytoplasm is…', ['The jelly-like fluid inside a cell', 'The cell\'s outer wall', 'A type of plant'], 0, 'Cell parts float in the cytoplasm.'],
    ['A microscope slide should be held by…', ['Its edges', 'The middle, where the sample is', 'Your teeth'], 0, 'Holding the edges keeps fingerprints off the sample.']
  ],
  'u4-l3': [
    ['Muscle tissue is made of…', ['Many muscle cells', 'Many organs', 'One giant cell'], 0, 'Tissues are groups of the same kind of cells.'],
    ['The lungs are an organ in the…', ['Respiratory system', 'Digestive system', 'Excretory system'], 0, 'Lungs take in oxygen.'],
    ['Which comes right after "tissue" when building up a body?', ['Organ', 'Cell', 'Organism'], 0, 'Cells → tissues → organs → systems → organism.'],
    ['A whole person is an…', ['Organism', 'Organ', 'Tissue'], 0, 'An organism is a complete living thing.'],
    ['Why do organ systems need to work together?', ['Each one depends on the others to keep you alive', 'They don\'t need to', 'So the body can be bigger'], 0, 'For example, the heart pumps blood carrying oxygen from the lungs.'],
    ['Skin is the body\'s largest…', ['Organ', 'Cell', 'System'], 0, 'Skin is an organ that protects you.'],
    ['Which is NOT a body system?', ['The kitchen system', 'The circulatory system', 'The respiratory system'], 0, 'Circulatory, respiratory, digestive and excretory are body systems.']
  ],
  'u4-l4': [
    ['The heart is part of which system?', ['Circulatory', 'Digestive', 'Respiratory'], 0, 'The heart pumps blood.'],
    ['Most nutrients are absorbed into the blood in the…', ['Small intestine', 'Mouth', 'Lungs'], 0, 'The small intestine absorbs nutrients.'],
    ['The bladder stores…', ['Urine (liquid waste)', 'Food', 'Blood'], 0, 'It is part of the excretory system.'],
    ['Why do you breathe faster when you run?', ['Your muscles need more oxygen', 'Your lungs get smaller', 'You are digesting food'], 0, 'Working muscles use more oxygen.'],
    ['The tubes that carry blood are called…', ['Blood vessels', 'Nerves', 'Intestines'], 0, 'Arteries, veins and capillaries are blood vessels.'],
    ['Chewing food in your mouth is the first step of the…', ['Digestive system', 'Excretory system', 'Respiratory system'], 0, 'Digestion starts in the mouth.']
  ],
  'u4-l5': [
    ['Which is a healthy habit for your body systems?', ['Getting 9 or more hours of sleep', 'Skipping breakfast every day', 'Staying up all night on a phone'], 0, 'Teens need lots of sleep for their bodies to recover.'],
    ['Smoking damages the lungs, which are part of the…', ['Respiratory system', 'Digestive system', 'Excretory system'], 0, 'Smoke harms the airways and lungs.'],
    ['Vaccines help your body by…', ['Training it to fight a disease', 'Giving you energy like food', 'Making your bones longer'], 0, 'Vaccines teach the immune system.'],
    ['Drinking enough water helps your…', ['Kidneys filter waste', 'Hair grow green', 'Lungs stop working'], 0, 'Water helps the excretory system.'],
    ['Why do scientists test new medicines carefully?', ['To make sure they are safe and actually work', 'To make them taste better', 'To make them cost more'], 0, 'Research and trials check safety.'],
    ['Regular exercise makes your heart…', ['Stronger', 'Weaker', 'Smaller and slower forever'], 0, 'The heart is a muscle that gets stronger with use.']
  ],
  'u5-l1': [
    ['A light source…', ['Gives off its own light', 'Only reflects light', 'Blocks all light'], 0, 'The moon reflects light; the sun gives off its own.'],
    ['The moon shines at night because it…', ['Reflects light from the sun', 'Makes its own light', 'Is on fire'], 0, 'The moon is not a light source.'],
    ['A shadow forms when…', ['An object blocks light', 'Light bends around an object', 'Light gets stronger'], 0, 'Light travels in straight lines, so blocked light leaves a shadow.'],
    ['Which travels faster?', ['Light', 'Sound', 'They are the same'], 0, 'You see lightning before you hear thunder.'],
    ['A flashlight is an…', ['Artificial light source', 'Natural light source', 'Object that only reflects light'], 0, 'People made it.'],
    ['Light is a form of…', ['Energy', 'Matter like rocks', 'Sound'], 0, 'Light carries energy.']
  ],
  'u5-l2': [
    ['A light ray hits a mirror at 30°. It bounces off at…', ['30°', '60°', '90°'], 0, 'The angle in equals the angle out.'],
    ['Which surface reflects light most clearly?', ['A smooth mirror', 'A wool sweater', 'A brick wall'], 0, 'Smooth surfaces give clear reflections.'],
    ['Road signs are easy to see at night because they…', ['Reflect car headlights back to the driver', 'Make their own light', 'Absorb all the light'], 0, 'Reflective material bounces light back.'],
    ['Why does writing look backwards in a mirror?', ['The mirror flips the image left to right', 'The mirror bends the letters', 'Mirrors erase letters'], 0, 'That\'s why AMBULANCE is printed backwards on the front of ambulances.'],
    ['Light scattering off a rough surface in all directions is…', ['Diffuse reflection', 'Refraction', 'Absorption'], 0, 'Rough surfaces scatter light.'],
    ['A dentist\'s small mirror helps them…', ['See the backs of teeth', 'Make teeth whiter', 'Make light'], 0, 'Reflection lets you see around corners.'],
    ['Which is the best reflector?', ['Shiny aluminum foil', 'Black paper', 'A wooden board'], 0, 'Shiny, smooth surfaces reflect best.']
  ],
  'u5-l3': [
    ['A straw in a glass of water looks bent because of…', ['Refraction', 'Reflection', 'Absorption'], 0, 'Light bends going from water to air.'],
    ['Wax paper is…', ['Translucent', 'Transparent', 'Opaque'], 0, 'It lets some light through, but you can\'t see clearly.'],
    ['A brick wall is…', ['Opaque', 'Translucent', 'Transparent'], 0, 'No light passes through.'],
    ['Why do people in hot places often wear light-coloured clothes?', ['Light colours reflect more sunlight and stay cooler', 'Light colours are heavier', 'Dark colours are not allowed'], 0, 'Dark colours absorb more light energy.'],
    ['When white light passes through a prism, it…', ['Splits into a rainbow of colours', 'Turns black', 'Disappears'], 0, 'Each colour bends a different amount.'],
    ['Clear plastic wrap is…', ['Transparent', 'Opaque', 'Translucent'], 0, 'You can see clearly through it.']
  ],
  'u5-l4': [
    ['A convex lens makes nearby objects look…', ['Bigger', 'Smaller', 'Upside down every time'], 0, 'That\'s how a magnifying glass works.'],
    ['A concave lens spreads light rays…', ['Apart', 'Together to a point', 'Into a rainbow'], 0, 'Concave lenses make rays spread out.'],
    ['People who are far-sighted (can\'t see close up) often wear…', ['Convex lenses', 'Concave lenses', 'Mirrors'], 0, 'Convex lenses help focus close objects.'],
    ['The lens in your eye is…', ['Convex', 'Concave', 'Flat'], 0, 'It focuses light onto the back of your eye.'],
    ['Binoculars use lenses to make far things look…', ['Closer and bigger', 'Farther away', 'Darker'], 0, 'They magnify distant objects.'],
    ['A lens works by…', ['Refracting (bending) light', 'Reflecting light like a mirror', 'Making its own light'], 0, 'Lenses bend light as it passes through.']
  ],
  'u5-l5': [
    ['The retina is…', ['The back of the eye, where images form', 'The coloured part of the eye', 'The clear front cover'], 0, 'The retina senses light, like a camera sensor.'],
    ['The pupil gets bigger in the dark to…', ['Let more light in', 'Keep light out', 'Change eye colour'], 0, 'More light helps you see in dim places.'],
    ['An MRI or X-ray helps doctors…', ['See inside the body without surgery', 'Make glasses', 'Take vacation photos'], 0, 'Medical imaging shows what\'s inside.'],
    ['Night-vision and infrared cameras detect…', ['Heat', 'Sound', 'Smells'], 0, 'Warm objects give off infrared light.'],
    ['Why should you never look straight at the sun?', ['It can permanently damage your retina', 'It makes the sun dimmer', 'It is only bad on cloudy days'], 0, 'Strong sunlight can burn the retina.'],
    ['An optometrist is someone who…', ['Tests eyes and prescribes glasses', 'Fixes cameras', 'Repairs car headlights'], 0, 'It\'s a career connected to light and lenses.']
  ]
});
