const story = {
  scene1: {
    character: "Detective Dottie",
    text: "Welcome to Jesterville, a town known for its vibrant annual comedy festival. But today, a shadow looms over this usually joyful place. The laughter, the very essence of this town, has mysteriously vanished, leaving the once-jubilant streets eerily silent.",
  },
  branches: {
    branch1A: {
      description: "Club Owner Interrogation",
      dialogue: [
        {
          character: "Detective Dottie",
          text: "A torn joke book, a malfunctioning laugh track machine, and a nervous club owner. Something's fishy, and it's not just the rubber fish in the props.",
        },
        {
          character: "Club Owner",
          text: "I swear, Detective, I’ve no idea. That torn book? Probably from one of the passing comedians. The laugh machine? It's been acting weird for days.",
        },
      ],
      end: {
        title: "End 1 - The Laughter Unveiled",
        details:
          "With relentless investigation, Detective Dottie unravels the mystery. As the missing pieces fall into place, a surprising revelation emerges. The laughter, concealed within a forgotten sound system, bursts out, filling the town with jubilant mirth once again.",
        monologue:
          "I found it! The laughter wasn't lost; it was hiding in plain sight. Jesterville's joy has returned, echoing through the streets.",
      },
    },
    branch1B: {
      description: "Comedy Prop Store Investigation",
      dialogue: [
        {
          character: "Detective Dottie",
          text: "A missing prank kit and a group of mimes purchasing silent act props. Seems like this store holds more than just joy buzzers.",
        },
        {
          character: "Shop Owner",
          text: "Yes, the prank kit’s gone missing, but it's those mimes; they’ve been eyeing the silent props for days. Strange bunch, those mimes.",
        },
        {
          character: "Detective Dottie",
          text: "Now, I need your help. To follow the leads, you can choose between two paths: 'Benny’s House Visit' or 'Inventor's Workshop Exploration.' Where should we go next?",
        },
      ],
      branches: {
        branch2A: {
          description: "Benny’s House Visit",
          dialogue: [
            {
              character: "Detective Dottie",
              text: "Benny's chaotic house filled with half-written jokes, comedy memorabilia, and a frustrated Benny at his desk.",
            },
            {
              character: "Benny",
              text: "I'm just a struggling comedian, Detective. Those missing jokes are my lifeline in this business.",
            },
          ],
          end: {
            title: "End 1 - The Laughter Unveiled",
            details:
              "At Benny's chaotic house, Detective Dottie pieces together the missing jokes. The hidden punchlines lead to an unexpected discovery—the town's laughter was accidentally hidden in a forgotten set of joke scripts.",
            monologue:
              "The laughter wasn't lost; it was tucked away in Benny's forgotten jokes. Jesterville's streets now resound with the familiar, delightful laughter.",
          },
        },
        branch2B: {
          description: "Inventor's Workshop Exploration",
          dialogue: [
            {
              character: "Detective Dottie",
              text: "A whimsical inventor's workshop with bizarre gadgets and unfinished joy-capturing contraptions.",
            },
            {
              character: "Inventor",
              text: "My gadgets bring joy, but they've gone haywire. I'm clueless about the missing laughter.",
            },
          ],
          end: {
            title: "End 2 - The Laughter Lost",
            details:
              "In the whimsical workshop, Detective Dottie realizes the inventor's gadgets inadvertently absorbed the town's laughter, creating chaos. The laughter, now dispersed, becomes a poignant memory as it dissipates into the ether.",
            monologue:
              "The laughter, dispersed in the inventions, escapes to the winds. Jesterville bears the bittersweet memory of its lost merriment.",
          },
        },
      },
    },
  },
};

export default story;
