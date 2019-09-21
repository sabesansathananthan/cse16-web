<template>
    <div class="container">
        <div class="row blogs-row" v-for="row in rows" :key="row">
            <div class="col l6" v-for="col in row" :key="col.id">
                <div class="card small blue-grey darken-1 z-depth-5 center">
                    <div class="card-content white-text">
                        <span class="card-title">{{ col.title }}</span>
                        <p> by {{ col.author }} </p>
                    </div>
                    <div class="card-action">
                        <a class="waves-effect waves-light btn modal-trigger blue-grey darken-3" :href="'#modal' + col.id">READ MORE</a>
                    </div>
                </div>
                <div :id="'modal' + col.id" class="modal modal-fixed-footer">
                    <div class="modal-content">
                        <h5>{{ col.title }}</h5>
                        <div v-for="paragraph in col.content" :key="paragraph">
                            <p>{{ paragraph }}</p>
                        </div>                        
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves btn-flat">Close</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    mounted() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {

        });
    },
    data() {
        return {
            rows: [
                [
                    {
                        id: '1',
                        title: 'The Journey of Friendship and Loyalty [cse_journey_0b001]',
                        content: [
                            'We got the privilege to step into the Department of  Computer Science and Engineering of University of Moratuwa after being the toppers of the Semester 1 examination after a very hard, stressful time. We were lucky to have 127 brothers and sisters on this department. As the freshers to the department we were warmly welcomed by the CSE15 family, after which we got the chance to organize our first batch trip as the CSE16 family.',
                            'After having a huge competition over an overwhelming amount of choices we decided to select ‘Adara Kanda’ as the destination for our trip. Batch representatives became very busy with taking this towards the success. Taking 128 active and energetic youngsters on a trip was a huge challenge for them as the main body of the CSE16 family. Finally, they were able to confirm the date and the destination for the 1st batch trip.',
                            '05th October was a special day for all of us. Waking up earlier than we usually do, we all gathered up at the campus to head toward our destination. Two buses were filled as soon as they arrived and all of us were very much excited for the upcoming adventure. We were able to reach the starting point of the hike at about 11.00 am while the reps were struggling to supply the lunch for the batchmates. We started our hike with the help from the students of the Sabaragamuwa University. We should extend special thanks to the brothers from Sabaragamuwa university who joined us on the hike to guide us along the way.',
                            'As one family we managed to reach our destination. All were excited with the scenery and the mist. This would not have been a success without the team spirit of the CSE16 family. The whole batch got down safely as a team.',
                            'Words cannot bring to light the day we spent together. The day managed to strengthen the bonds and give us loads and loads of excitement.',
                            'Nevertheless the day managed to give us a much needed respite from our academics and other responsibilities so that we can face all of them again with renewed spirit.',
                            'Much appreciation goes to the batch representatives for organizing a day of relaxation and excitement.'
                        ],
                        author: 'Charith Rajitha'
                    }, 
                    {
                        id: '2',
                        title: 'Explorint New Cultures [cse_journey_0b010]',
                        content: [
                            'Imagine studying over a month without a break; it would probably be a stressful time. We were very busy with lectures, assignments, submissions and lot more. That’s why all the CSE16 family needed a break for their busy life. All the batchmates were requesting another trip from the batch representatives, whose biggest problem was, ‘How can this be done?’. Choosing a date for a 2-day trip was not an easy task until, luckily for us, the non – academic trade union action came around the corner.',
                            'CSE16 family took the chance of the unexpected holiday due to the strike on 6th and 7th of February. All our Tamil brothers and sisters worked hard for the trip since the destination of the CSE Journey 0b010 was Jaffna. Night of 5th February was an important one for all of us, because while most of the students in other departments were headed towards home, we found ourselves packing up and getting ready for the epic journey ahead.',
                            'We were very much excited to gain this experience of our first two day trip. Most of us enjoyed the sleepless ride while some were sleeping. Having been able to reach Jaffna at about 7.00am on the 6th of February, we directly headed towards Vivek’s home, who was the main host of our trip.',
                            'Vivek’s family members warmly welcomed us. We were fortunate enough to experience their hospitality by way of a scrumptious meal. As soon as we finished our breakfast we headed towards Nagadeepa. The boat ride on the way to Nagadeepa was exhilarating. We all worshipped Nagadeepa temple and the kovil and enjoyed the lunch provided by the Kovil. That lunch was a memorable one for all of us. This visit was one that revived our understanding of each other’s cultures, and thus worked a lot in favour of strengthening our bonds as well.',
                            'Then we quickly went to Kankasanthurai beach, since all of us needed a bath. We got the chance to bath and play together until the sun goes down while looking at the beautiful scenery of the sun and the Kankasanthurai Lighthouse.',
                            'The next special event was the campfire and the dinner. I’m sure each and every one of my peers of CSE16 family will agree with me that the campfire was indeed a memorable and eventful occasion. Have you ever eaten Idli? I think that it was the best idli I ever had. The whole gratitude must go to our Tamil brothers for supplying this sweet unforgettable moments and food.',
                            'The following day was also an important one as we had planned to visit Nallur Kovil, Rio Ice Cream and Casuarina beach. We worshiped Nallur Kovil early morning after having breakfast at Thineshan’s home and had delicious ice cream from Rio Ice Cream.',
                            'Then we got the chance to go to Casuarina beach and all of us played with the rolling sea waves and the golden sand till late afternoon. At about 5.00pm we had our lunch which was generously supplied by Lavanaraj’s family. At about 8.00pm we started our way back hoping to reach university at about 6.00am on the 8th of February.',
                            'Words can’t express what we felt throughout the journey; the time we had was very remarkable and unforgettable. We had a good time exploring a new culture while making our family bond stronger. We should appreciate our Tamil brothers as well as the batch representatives for making these two days a success.'
                        ],
                        author: 'Charith Rajitha'
                    }
                ],
                [
                    {
                        id: '3',
                        title: 'Strengthening Bonds [cse_journey_0b011]',
                        content: [
                            'Down South was where we journeyed to in our third official batch trip with the help and organization of our batchmates from Galle and Matara. First stop was at the Madu River Lake in Deniyaya which had multiple boats eagerly awaiting to service our crowd. Other than learning of its placement in local history, we were also able to experience the highly fish therapy sessions near lake bank.',
                            'Next stop was the famous tourist attraction which is the Jungle Beach. Here was where most of the day was spent by relaxing or playing around in its calm waters. It did rain in the evening, but the rain never stopped us from having fun. After the rain died, we dried ourselves and since it was getting dark, we went straight to our lodging place for the night; a comfy villa one of our Matara friends had acquired for us.',
                            'After arriving at the villa, all of us washed the sand off ourselves and had dinner, which was prepared by a couple of our Galle and Matara batchmates. After dinner, most of our group went to bed and prepared ourselves for the early wake tomorrow. However, a small group of boys and girls spent the entire night on the small veranda without sleep, but with heated and passionate rounds of mafia, a game that had spread like wildfire throughout our batch. This small group might even argue that the climax of this trip was this night, where they learned that even the infinitesimal possibilities can come into fruition.',
                            'Though the plan was to get up at 6:30 am, many of us decided that a few more hours of sleep was worth the delay. After having breakfast supplied by another of our Matara friends at his house, the course was set for the rock sliding attraction at Patna. During the long ride which consumed most of the day, our group again didn’t fail to play mafia at every opportunity. Thankfully, most of the walking to the location was saved by our bus driver who expertly handled the vehicle through the narrow, twisting and turning road up the mountain.',
                            'Everyone, including the sleepless mafia crew joined in on the fun after arriving at our destination. It was a new experience to many of us. A few took upon them the task of diverting more water into the rocks which made the better areas of the attraction be usable. We enjoyed sliding and bathing in the cool running water for a couple of hours before lunch was provided by another Matara batchmate. After filling our stomachs, it was time for us to head home.',
                            'The ride back home was again filled with heated rounds of mafia. The last stop for half of us was the house of another Matara batchmate who provided hospitality by serving us tea and snacks. The ride after was still long, and the mafia rounds continued without a break until we reached Matara. Around half of our group said farewell there; which was a convenient location for them to head home, while the other half decided to visit one last attraction; the Galle Fort, before separating. One of our Galle friends had hyped us claiming that the Galle Fort area was dazzling at night. His claims did not disappoint the remaining half of the group when they got down and saw their final attraction. As all things come to end, so did this journey, on a very high note. The remaining group of friends said their goodbyes and went their separate ways, each and every one of them knowing that these memories will last with them forever.'
                        ],
                        author: 'Suchitha Dehigaspitiya'
                    }, 
                    {
                        id: '4',
                        title: 'The Warmest Welcom Ever - Night of the Brethren',
                        content: [
                            'On a day we are overwhelmed by studies we got the card, “Just play with it…..” that’s what seniors said, and that’s exactly what we did. When the phone reads the barcode on the card, it shows a link to app which we had to download. You have to see the card through the app...It was augmented reality; a ship, a pirate ship on the card. Next few days as usual we spent bragging about it to our colleagues in other departments. We knew if the CSE Night would be as good as the invitation card, it would be magical.',
                            'And the Night of the Brethren dawned, the day our seniors welcomed us to the Computer Science and Engineering family, the day we become a part of this awesome family. It was awesome!!! From the costumes, to the decorations, to the games; everything was just perfect. Night had some funny and creative games where we had to be creative. Participating in numerous such games helped us create some memorable moments and not to mention the short dramas we did as well as dubbing we did were wickedly funny. We also get to watch some breathtaking performances by our batch mates and our seniors as well. Night created some of the most memorable pictures as well including the one with a guy and a girl (who threatened me not to mention their names) taking the award for best drama (if you don’t know what I mean just ask any CSE student from ‘16 batch) which I suspect the guy paid the seniors for. With all those memorable moments the night was simply magical but far from over.',
                            'Then the music started and our bodies started to move. Before we know it we were in the dance floor dancing to the beat. There wasn’t single soul waiting, watching from the outside. We were dancing like it was the last night on earth. Girls and guys dancing like one, ones who can dance and ones who swear that won’t dance...everyone was in the dance floor. Some dancers were awesome, some were hilarious and some are out of this planet hilarious like one of our batchmates who danced like he got a kiss from his crush. We danced till dawn....together.',
                            'Among all the magic...preparation for the night, from decorations, to costumes, to all the effort seniors put in, to memorable moments we made (mostly hilarious), biggest magic to me was how it brought our batch closer. Before the night most of us were strangers, only seen in lectures and hardly talked with each other, but after the night we were one family. Family of not by blood but by loyalty and friendship.'
                        ],
                        author: 'Tharindu Madusanka'
                    }
                ],
                [
                    {
                        id: '5',
                        title: 'Professional Etiquette Workshop at MillenniumIT',
                        content: [
                            'Workshops are boring to most people but not to those of us at the CSE department. MillenniumIT owns the courteousness of holding a session of basic etiquette for the level 2 undergraduates of Department of Computer Science and Engineering, University of Moratuwa and this year we were the privileged.',
                            'The ‘16 batch left the university premises by 8 in the morning and arrived at the surprisingly picturesque MillenniumIT premises, Malabe, around 9. We were warmly welcomed by those who sacrificed their leisure day just to be there for us and make sure we had the best experience.',
                            'The breakfast was a generous sponsor by MillenniumIT themselves and then we officially started the ‘workshop’, with the initial session hoarding us with the super basics in social etiquette. We were taught and showed the proper way of using an elevator, proper handshaking and then of course the ways to handle emails and phone calls like a pro. It was definitely surprising to learn how the smallest things can make a great impression in one’s mind and to learn them was definitely worth giving up our usual Saturday chilling.',
                            'Next up was the grooming session. Girls and boys were separated to make the session less generic. And again, we were enlightened with tons of day to day tips starting from skincare and general health care to the final touch ups of clothing and makeup. Then came the most awaited session of the whole workshop, the dining etiquette. We were provided with an absolutely delicious 3 course meal based on our meal preference and every single step of dining was delicately demonstrated by the professionals.',
                            'Since all good things come to an end so quickly, so did this amazing workshop. So, the ‘16 batch left the beautiful MillenniumIT premises as ‘ladies and gentlemen’ and of course with hundreds of smiling photos on their phones.'
                        ],
                        author: 'Chamodi Samarawickrama'
                    }, 
                    {
                        id: '6',
                        title: 'Leadership & Teamwork Skills Workshop by Virtusa',
                        content: [
                            'With the weekly workshops by different software companies as well as professional etiquette workshops and leadership development workshops, the 3rd semester really felt like the semester in which we stepped out of the boundaries of our campus and stepped out into the world, and this is the story of one such workshop.',
                            'When we first saw that we had a “Leadership Development Workshop” for Communication Skills, our batchmates had mixed reactions, to say the least. It did not help that it was scheduled on a Saturday either. Nonetheless, we all piled into a couple of buses on Saturday morning and set off to Bandaragama.',
                            'As we set our GPS for the Sarvodaya Institute of Higher Learning it soon became apparent that our day would be far from uneventful, when Google Maps led us straight to a lake, with no means of reversing the bus. About one hour, and an impressive 16-point turn later, we finally arrived at our destination, where Virtusa employees were waiting to greet us.',
                            'The first activity in line was not something we were expecting. We were split into teams and given a briefing (the same way that a software company would get a briefing from a client) and told to prepare presentations to pitch to our clients. A couple of hours later, it was time to pitch our ideas. The different teams had come up with various solutions to address the client’s brief to “create a home automation system”, and had designed various innovative ways of handling the challenges put forth by the team from Virtusa. However, the most entertaining part of the many pitches was undoubtedly the extensive explanation of blockchain systems to the judges from Virtusa given by one of our batchmates.',
                            'Once all the pitches were over, it was time for lunch, and a delicious buffet awaited us, courtesy of Virtusa. Once we had all filled in heartily, it was time for the second half of the workshop.  We were all asked to step outdoors, where we found that a team of teamwork building experts had been hired to train us.',
                            'From balancing nails to running around and ‘putting balls in bowls’ and trying to lift up a pipe (turns out, it’s a lot harder than it sounds) we had a lot of fun engaging in some unique team building activities. In the late afternoon, we wrapped up the event with a choreographed (well, sort of choreographed), group song. The idea of a leadership development workshop may have sounded rather boring when we set off, but at the end of the day, we ended up having a great time.'
                        ],
                        author: 'Haritha Jayasinghe'
                    }
                ]
            ]
        }
    }
}
</script>

<style>
.blogs-row {
    height: 300px;
}
.modal { 
    min-height: 85%; 
}
</style>
