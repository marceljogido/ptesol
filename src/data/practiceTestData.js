// Peterson's TOEFL PBT Database
const practiceTestData = {
  test1: {
    id: "test1",
    title: "Practice Test 1",
    sections: {
      listening: {
        title: "Section 1: Listening Comprehension",
        instructions: "Pilihlah jawaban terbaik untuk setiap pertanyaan setelah mendengarkan percakapan.",
        questions: [
        {
                            "id": "l1_1",
                            "number": 1,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I can't find those photographs I just had developed."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I think I saw them on the piano."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks the photos are in the developer's shop.",
                                      "She will help the man look for the photos.",
                                      "She believes the photos are on the piano.",
                                      "She doesn't know where the photos are."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyatakan bahwa ia melihat foto-foto tersebut berada di atas piano (\"on the piano\")."
                  },
                  {
                            "id": "l1_2",
                            "number": 2,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Fred sure was angry."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'll say. He left without saying goodbye to anyone."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Fred?"
                                      }
                            ],
                            "question": "What does the man say about Fred?",
                            "options": [
                                      "Fred forgot to say goodbye.",
                                      "Fred was happy to leave early.",
                                      "Fred didn't have time to say goodbye.",
                                      "Fred left in a bad mood without saying goodbye."
                            ],
                            "answer": 3,
                            "explanation": "Pria tersebut menyetujui kemarahan Fred (\"I'll say\") dan menambahkan bahwa Fred pergi begitu saja tanpa mengucapkan selamat tinggal kepada siapa pun."
                  },
                  {
                            "id": "l1_3",
                            "number": 3,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "What an uncomfortable-looking chair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Well, it may look that way - but just try it out!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "The chair is indeed very uncomfortable.",
                                      "She doesn't want the man to sit on it.",
                                      "The chair is actually more comfortable than it looks.",
                                      "She is going to buy a new chair soon."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyarankan pria itu untuk mencobanya terlebih dahulu (\"just try it out\"), menyiratkan bahwa kursi tersebut sebenarnya nyaman meski tampak tidak demikian."
                  },
                  {
                            "id": "l1_4",
                            "number": 4,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "So, where are the rose gardens? Didn't you say they were here on the west side of the park?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "No, no I said they were on the east side."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "The rose gardens are on the east side of the park.",
                                      "She doesn't know where the rose gardens are.",
                                      "The gardens have been moved to another park.",
                                      "She prefers the west side of the park."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut meralat asumsi pria itu dan menegaskan bahwa kebun mawar berada di sebelah timur (\"on the east side\")."
                  },
                  {
                            "id": "l1_5",
                            "number": 5,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "George, is Linda leaving tonight?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think that's what she said."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does George say about Linda?"
                                      }
                            ],
                            "question": "What does George say about Linda?",
                            "options": [
                                      "Linda is staying for another night.",
                                      "He believes Linda is leaving tonight as she mentioned.",
                                      "Linda has already left the building.",
                                      "He is not sure if Linda is leaving at all."
                            ],
                            "answer": 1,
                            "explanation": "George meyakini Linda akan pergi malam ini berdasarkan apa yang pernah Linda katakan (\"I think that's what she said\")."
                  },
                  {
                            "id": "l1_6",
                            "number": 6,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Two weeks' work down the drain!"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, no your experiment wasn't successful?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about the man from this conversation?"
                                      }
                            ],
                            "question": "What is learned about the man from this conversation?",
                            "options": [
                                      "He has been working for only two weeks.",
                                      "His experiment was not successful.",
                                      "He needs to drain the water from his lab.",
                                      "He is going to take a two-week vacation."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan \"down the drain\" adalah idiom yang berarti sia-sia atau terbuang percuma, mengonfirmasi kegagalan eksperimennya."
                  },
                  {
                            "id": "l1_7",
                            "number": 7,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I see Carrie's riding her bike again. Did she fix it herself?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think she got her brother to do it."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man believe about Carrie?"
                                      }
                            ],
                            "question": "What does the man believe about Carrie?",
                            "options": [
                                      "She fixed the bicycle herself.",
                                      "She bought a new bicycle.",
                                      "She doesn't know how to ride a bike.",
                                      "She had her brother repair the bicycle."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"got her brother to do it\" mengindikasikan Carrie meminta saudara laki-lakinya untuk memperbaiki sepeda tersebut."
                  },
                  {
                            "id": "l1_8",
                            "number": 8,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Did the band play for about 2 hours?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No. This time, the concert was over in an hour and a half."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "How long did the concert last?"
                                      }
                            ],
                            "question": "How long did the concert last?",
                            "options": [
                                      "Two hours.",
                                      "Exactly one hour.",
                                      "One and a half hours.",
                                      "More than two hours."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut membantah durasi 2 jam dan menyatakan konser selesai dalam satu setengah jam (\"an hour and a half\")."
                  },
                  {
                            "id": "l1_9",
                            "number": 9,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe you could get a ride to campus with Peggy tomorrow."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Oh, Peggy no longer drives to class."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Peggy?"
                                      }
                            ],
                            "question": "What does the man say about Peggy?",
                            "options": [
                                      "Peggy no longer drives to class.",
                                      "Peggy will give the man a ride tomorrow.",
                                      "Peggy is not going to class tomorrow.",
                                      "Peggy has a new car."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu menjelaskan secara lugas bahwa Peggy sudah tidak mengemudikan kendaraan ke kelas lagi (\"no longer drives to class\")."
                  },
                  {
                            "id": "l1_10",
                            "number": 10,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Swimming is good exercise."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Of course. And so is dancing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks swimming is better than dancing.",
                                      "She doesn't like to swim or dance.",
                                      "Dancing is also good exercise.",
                                      "She wants to go swimming today."
                            ],
                            "answer": 2,
                            "explanation": "Ungkapan \"so is dancing\" memiliki arti persetujuan bahwa menari juga merupakan olahraga yang baik sama seperti berenang."
                  },
                  {
                            "id": "l1_11",
                            "number": 11,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I need to go out. Is it still raining?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Yes, but it's starting to let up a little."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She wants to go out with the man.",
                                      "It is starting to rain less hard.",
                                      "It is raining harder than before.",
                                      "She doesn't want the man to go out."
                            ],
                            "answer": 1,
                            "explanation": "Idiom \"let up\" dalam konteks cuaca hujan berarti mereda atau berkurang intensitasnya."
                  },
                  {
                            "id": "l1_12",
                            "number": 12,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Then you and Robert finished your project on time?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes - no thanks to Robert!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "Robert did most of the work on the project.",
                                      "Robert was not helpful in finishing the project.",
                                      "She is very grateful for Robert's help.",
                                      "They were unable to complete the project on time."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan sinis \"no thanks to Robert\" menunjukkan bahwa proyek selesai bukan karena kontribusi Robert, melainkan karena kerja keras mandiri sang wanita."
                  },
                  {
                            "id": "l1_13",
                            "number": 13,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "I just heard that Professor Hendrix is retiring at the end of the semester."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Too bad - I was hoping to take his chemistry course next semester."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about Professor Hendrix from this conversation?"
                                      }
                            ],
                            "question": "What is learned about Professor Hendrix from this conversation?",
                            "options": [
                                      "He will teach chemistry next semester.",
                                      "He is starting a new course in chemistry.",
                                      "He has decided not to retire after all.",
                                      "He is retiring and will not teach next semester."
                            ],
                            "answer": 3,
                            "explanation": "Frasa \"Professor Hendrix is retiring\" mengonfirmasi bahwa sang profesor pensiun, sehingga ia tidak akan mengajar lagi di semester berikutnya."
                  },
                  {
                            "id": "l1_14",
                            "number": 14,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like some flowers delivered to Hillcrest Hospital."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Certainly. If you step over here, I'll show you some arrangements."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is the man going to do?"
                                      }
                            ],
                            "question": "What is the man going to do?",
                            "options": [
                                      "Choose some flower arrangements.",
                                      "Go to Hillcrest Hospital himself.",
                                      "Deliver flowers to a friend.",
                                      "Plant some flowers in the garden."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut menawarkan untuk menunjukkan rangkaian bunga (\"show you some arrangements\"), yang mengarahkan pria itu untuk memilih dekorasi bunga yang diinginkan."
                  },
                  {
                            "id": "l1_15",
                            "number": 15,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "My watch isn't running."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Why not have the jeweler around the corner fix it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman suggest the man do?"
                                      }
                            ],
                            "question": "What does the woman suggest the man do?",
                            "options": [
                                      "Buy a new watch from the jeweler.",
                                      "Run around the corner to check the time.",
                                      "Fix the watch himself.",
                                      "Have his watch repaired by a jeweler."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"have the jeweler fix it\" menyarankan agar pria tersebut membawa jam tangannya yang mati ke toko perhiasan/jam terdekat untuk diperbaiki."
                  },
                  {
                            "id": "l1_16",
                            "number": 16,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Just think - in another couple of days, I'll be in Montreal."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "How will you get around once you get there?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman ask the man?"
                                      }
                            ],
                            "question": "What does the woman ask the man?",
                            "options": [
                                      "When he is leaving for Montreal.",
                                      "If he has friends in Montreal.",
                                      "How he will travel around Montreal.",
                                      "Why he decided to go to Montreal."
                            ],
                            "answer": 2,
                            "explanation": "Pertanyaan \"How will you get around\" menanyakan sarana transportasi atau metode perjalanan yang akan digunakan pria tersebut saat berada di kota Montreal."
                  },
                  {
                            "id": "l1_17",
                            "number": 17,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I'm exhausted. I can't wait for the weekend to get here."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Need a little rest, do you?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "He agrees that the woman needs some rest.",
                                      "He is also exhausted from work.",
                                      "He cannot wait for the weekend either.",
                                      "He does not think the woman worked hard."
                            ],
                            "answer": 0,
                            "explanation": "Pertanyaan retoris pria itu mengonfirmasi situasi wanita tersebut dan menyetujui bahwa ia memang membutuhkan waktu istirahat."
                  },
                  {
                            "id": "l1_18",
                            "number": 18,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Diane is always saying she loves to go ice-skating."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yes, but when's the last time you actually saw her out on the ice?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man imply about Diane?"
                                      }
                            ],
                            "question": "What does the man imply about Diane?",
                            "options": [
                                      "Diane is a very professional ice-skater.",
                                      "He has seen Diane skating recently.",
                                      "Diane has never gone ice-skating.",
                                      "Diane does not go skating very often."
                            ],
                            "answer": 3,
                            "explanation": "Pertanyaan retoris pria itu \"kapan terakhir kali kamu benar-benar melihatnya di atas es?\" menyiratkan bahwa Diane sebenarnya jarang sekali melakukan olahraga seluncur es meskipun ia mengaku menyukainya."
                  },
                  {
                            "id": "l1_19",
                            "number": 19,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like to return this sweater because it's too small. I don't have the receipt with me, though."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "You could exchange the sweater for another size. But if you don't have the receipt, I won't be able to give you your money back."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He can get his money back if he exchanges the size.",
                                      "He cannot exchange the sweater for another size.",
                                      "He needs to buy a larger size sweater.",
                                      "He cannot get a refund without a receipt."
                            ],
                            "answer": 3,
                            "explanation": "Penjual wanita menegaskan secara jelas bahwa tanpa struk pembelian (\"without the receipt\"), ia tidak dapat memproses pengembalian uang (\"refund\")."
                  },
                  {
                            "id": "l1_20",
                            "number": 20,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Have you ever eaten at the Fisherman's Grotto?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Have I? I never go to the beach without stopping there."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She has never eaten at the Fisherman's Grotto.",
                                      "She does not like eating at the beach.",
                                      "She always eats there when she goes to the beach.",
                                      "The restaurant is too far from the beach."
                            ],
                            "answer": 2,
                            "explanation": "Respons bermakna penekanan ganda \"I never go to the beach without stopping there\" berarti ia selalu menyempatkan diri mampir makan di restoran tersebut setiap pergi ke pantai."
                  },
                  {
                            "id": "l1_21",
                            "number": 21,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Brenda, will you play that song you wrote?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Only if you accompany me on the guitar."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Brenda want the man to do?"
                                      }
                            ],
                            "question": "What does Brenda want the man to do?",
                            "options": [
                                      "Play the guitar while she sings or plays.",
                                      "Write a new song for her.",
                                      "Teach her how to play the guitar.",
                                      "Listen to her song quietly."
                            ],
                            "answer": 0,
                            "explanation": "Brenda bersedia memainkan lagunya hanya jika pria itu mengiringinya menggunakan gitar (\"accompany me on the guitar\")."
                  },
                  {
                            "id": "l1_22",
                            "number": 22,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'm planning to clean up the kitchen this afternoon."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Shouldn't you clean the rest of your apartment while you're at it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He should wait until tomorrow to clean.",
                                      "He should clean the other rooms of the apartment too.",
                                      "The kitchen is already clean enough.",
                                      "She will help him clean the apartment."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat \"Shouldn't you clean the rest of your apartment\" menyarankan agar pria tersebut tidak hanya membersihkan dapur saja, melainkan ruangan lainnya juga."
                  },
                  {
                            "id": "l1_23",
                            "number": 23,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "That was a great play, wasn't it?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yeah, the cast was wonderful. I could hardly believe they weren't professional actors."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "The actors in the play were very unprofessional.",
                                      "The acting was exceptionally good.",
                                      "He wanted to become a professional actor himself.",
                                      "He did not enjoy the theater play."
                            ],
                            "answer": 1,
                            "explanation": "Pujian \"could hardly believe they weren't professional\" menegaskan bahwa kualitas akting para pemeran amat bagus layaknya aktor profesional."
                  },
                  {
                            "id": "l1_24",
                            "number": 24,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "There are only a few drops left in the can. I guess we'll have to buy some in the morning."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, we can finish up this job tomorrow. Let's just wash out our brushes for now."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What will they probably buy in the morning?"
                                      }
                            ],
                            "question": "What will they probably buy in the morning?",
                            "options": [
                                      "New paintbrushes.",
                                      "A new can of water.",
                                      "More paint.",
                                      "Some breakfast food."
                            ],
                            "answer": 2,
                            "explanation": "Berdasarkan petunjuk penggunaan kuas (\"brushes\") dan sisa cairan di dalam kaleng (\"drops left in the can\"), objek yang akan habis dan perlu dibeli esok hari adalah cat tembok."
                  },
                  {
                            "id": "l1_25",
                            "number": 25,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Jim, can I have one of those bananas you bought?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Sorry - they're still not ripe enough."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Jim mean?"
                                      }
                            ],
                            "question": "What does Jim mean?",
                            "options": [
                                      "He wants to save the bananas for tomorrow.",
                                      "The bananas are too expensive to share.",
                                      "The bananas have already gone bad.",
                                      "The bananas are not ready to be eaten yet."
                            ],
                            "answer": 3,
                            "explanation": "Istilah \"not ripe enough\" berarti buah pisang tersebut belum cukup matang untuk dikonsumsi saat ini."
                  },
                  {
                            "id": "l1_26",
                            "number": 26,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "The students in Professor Murray's class think that the test he gave was unfair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "A few of them do, anyway."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What can be inferred from this conversation?"
                                      }
                            ],
                            "question": "What can be inferred from this conversation?",
                            "options": [
                                      "Most of the students did not think the test was unfair.",
                                      "The test was cancelled by Professor Murray.",
                                      "All students failed the exam.",
                                      "Professor Murray is going to change the test grades."
                            ],
                            "answer": 0,
                            "explanation": "Koreksi \"A few of them do, anyway\" mengindikasikan hanya sebagian kecil mahasiswa yang menganggap ujian itu tidak adil, yang berarti mayoritas mahasiswa merasa ujian tersebut adil-adil saja."
                  },
                  {
                            "id": "l1_27",
                            "number": 27,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "John sure knows some good places to eat, doesn't he?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yeah, when it comes to finding great restaurants, John wrote the book."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman say about John?"
                                      }
                            ],
                            "question": "What does the woman say about John?",
                            "options": [
                                      "John has written a cookbook about restaurants.",
                                      "John reads books while eating at restaurants.",
                                      "John is an expert at finding good restaurants.",
                                      "John does not like eating at local restaurants."
                            ],
                            "answer": 2,
                            "explanation": "Idiom \"wrote the book\" pada suatu bidang berarti orang tersebut adalah pakar/ahli yang sangat berpengalaman di bidang tersebut."
                  },
                  {
                            "id": "l1_28",
                            "number": 28,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Look at my face! I got sunburned again yesterday."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe next time you'll remember to wear your hat when you're working in the garden."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman think the man should do?"
                                      }
                            ],
                            "question": "What does the woman think the man should do?",
                            "options": [
                                      "Stop working in the garden entirely.",
                                      "Wear a hat next time he works in the garden.",
                                      "Put some lotion on his sunburned face.",
                                      "Buy a larger hat from the local market."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut menyarankan agar lain kali pria tersebut memakai topi (\"remember to wear your hat\") ketika berkebun untuk menghindari kulit terbakar matahari."
                  },
                  {
                            "id": "l1_29",
                            "number": 29,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Were any of the windows unlocked?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Not one of them."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "Some of the windows were unlocked.",
                                      "He forgot to check the windows.",
                                      "All of the windows were locked.",
                                      "The windows were broken."
                            ],
                            "answer": 2,
                            "explanation": "Jawaban \"Not one of them\" menegaskan bahwa tidak ada satu pun jendela yang tidak terkunci, yang berarti seluruh jendela dalam keadaan terkunci rapat."
                  },
                  {
                            "id": "l1_30",
                            "number": 30,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Harry, what's your new roommate like?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, for one thing, he's very outgoing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Harry say about his roommate?"
                                      }
                            ],
                            "question": "What does Harry say about his roommate?",
                            "options": [
                                      "He is very friendly and sociable.",
                                      "He likes to stay in the room all day.",
                                      "He is looking for another room.",
                                      "He is very quiet and reserved."
                            ],
                            "answer": 0,
                            "explanation": "Karakteristik \"outgoing\" merujuk pada sifat seseorang yang ramah, terbuka, aktif, dan senang bergaul dengan orang lain."
                  },
                  {
                            "id": "l1_31",
                            "number": 31,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "Why was the woman at first confused when the man asked her for directions?",
                            "options": [
                                      "She did not know where Reynolds Hall was.",
                                      "She knew the building only by its informal name (Art Building).",
                                      "She thought Reynolds Hall was a chemistry building.",
                                      "She didn't hear him clearly."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut awalnya bingung karena nama formal gedung itu (Reynolds Hall) jarang digunakan, sementara orang-orang kampus terbiasa menyebutnya dengan nama \"Art Building\"."
                  },
                  {
                            "id": "l1_32",
                            "number": 32,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "According to the woman, what is directly in front of the Art Building?",
                            "options": [
                                      "A chemistry lab.",
                                      "A main library walkway.",
                                      "A service road.",
                                      "A big abstract metal sculpture."
                            ],
                            "answer": 3,
                            "explanation": "Petunjuk arah terakhir menegaskan terdapat patung logam abstrak berukuran besar (\"a big abstract metal sculpture\") tepat berada di depan gedung tersebut."
                  },
                  {
                            "id": "l1_33",
                            "number": 33,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What can be inferred from the conversation about the man's sister?",
                            "options": [
                                      "She is a graduate student.",
                                      "She is an art professor.",
                                      "She does not like paintings.",
                                      "She works at the campus library."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu datang untuk melihat lukisan saudara perempuannya di dalam pameran yang secara eksplisit didefinisikan sebagai pameran lukisan mahasiswa pascasarjana (\"graduate student paintings\")."
                  },
                  {
                            "id": "l1_34",
                            "number": 34,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What is the woman's attitude toward the man?",
                            "options": [
                                      "Indifferent.",
                                      "Impatient.",
                                      "Suspicious.",
                                      "Helpful and friendly."
                            ],
                            "answer": 3,
                            "explanation": "Wanita tersebut secara sabar memandu rute jalan, mengoreksi kesalahpahaman arah pria itu, dan mendoakan agar ia menikmati pamerannya."
                  },
                  {
                            "id": "l1_35",
                            "number": 35,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "What had Professor Carmichael been talking about when Ted asked her a question?",
                            "options": [
                                      "Space exploration budgets.",
                                      "Einstein's theories of relativity and the speed of light.",
                                      "The history of science fiction movies.",
                                      "The construction of modern telescopes."
                            ],
                            "answer": 1,
                            "explanation": "Pembahasan dimulai dengan mengacu pada pemaparan materi profesor mengenai teori Einstein bahwa tidak ada yang dapat melaju melebihi kecepatan cahaya."
                  },
                  {
                            "id": "l1_36",
                            "number": 36,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "If a ship could travel almost as fast as light, how long would it take to get to the closest star?",
                            "options": [
                                      "A few days.",
                                      "Around 186,000 seconds.",
                                      "Four or five years.",
                                      "Thousands of years."
                            ],
                            "answer": 2,
                            "explanation": "Ted menyatakan jika pesawat melaju mendekati kecepatan cahaya, perjalanan menuju bintang terdekat (berjarak sekitar 4 tahun cahaya) akan memakan waktu empat sampai lima tahun (\"four or five years\")."
                  },
                  {
                            "id": "l1_37",
                            "number": 37,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "According to Professor Carmichael, what must be developed before ships can travel to the closest stars?",
                            "options": [
                                      "A completely different method of powering spaceships.",
                                      "Better astronaut training programs.",
                                      "Faster communication systems.",
                                      "Larger fuel tanks for liquid oxygen."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menegaskan bahan bakar konvensional tidak akan cukup untuk ribuan tahun perjalanan, sehingga manusia membutuhkan metode daya penggerak baru (\"completely different method of powering\")."
                  },
                  {
                            "id": "l1_38",
                            "number": 38,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "How does Professor Carmichael characterize travel to other stars?",
                            "options": [
                                      "Unlikely in the foreseeable future.",
                                      "Completely impossible for all time.",
                                      "Already happening in secret military programs.",
                                      "Easy to achieve with current rocket technology."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menyimpulkan bahwa dalam kurun waktu masa depan terdekat, kapal antarbintang hanya akan eksis di film fiksi ilmiah dan buku saja."
                  },
                  {
                            "id": "l1_39",
                            "number": 39,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Whom is the speaker addressing?",
                            "options": [
                                      "Journalism students on a field trip.",
                                      "Local printing press workers.",
                                      "Experienced newspaper deliverers.",
                                      "Tourists visiting the historical monument."
                            ],
                            "answer": null,
                            "explanation": "Audiens adalah para mahasiswa jurnalisme yang melakukan kunjungan lapangan ke kantor redaksi surat kabar."
                  },
                  {
                            "id": "l1_40",
                            "number": 40,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Where will the people listening to this talk go first?",
                            "options": [
                                      "To the Editorial Department.",
                                      "To the Circulation Department.",
                                      "To the Production Department.",
                                      "To the City Desk."
                            ],
                            "answer": 1,
                            "explanation": "Pembawa tur menyebutkan secara jelas bahwa kunjungan pertama dimulai dari Departemen Sirkulasi (\"We'll begin our tour with a visit to the Circulation Department\")."
                  },
                  {
                            "id": "l1_41",
                            "number": 41,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "According to the speaker, what type of work is done at the City Desk?",
                            "options": [
                                      "Distributing newspapers across the state.",
                                      "Gathering and reporting local news.",
                                      "Printing the final pages of the newspaper.",
                                      "Managing international relations."
                            ],
                            "answer": 1,
                            "explanation": "City Desk di dalam Departemen Editorial didefinisikan memiliki tanggung jawab mengumpulkan dan mengabarkan berita-berita lokal (\"gathering and reporting local news\")."
                  },
                  {
                            "id": "l1_42",
                            "number": 42,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What aspect of the \"Semester Afloat\" program does Professor Mackenzie's talk focus on?",
                            "options": [
                                      "The history of the S.S. Apollo.",
                                      "The cost of student tuition fees.",
                                      "Recreational and sports activities on the ship.",
                                      "The academic program and curriculum."
                            ],
                            "answer": 3,
                            "explanation": "Profesor Mackenzie menyatakan di akhir paragraf pertama: \"tonight I want to talk mainly about the academic program\"."
                  },
                  {
                            "id": "l1_43",
                            "number": 43,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What did Professor Mackenzie teach during the \"Semester Afloat\" programs?",
                            "options": [
                                      "Ancient languages of Southeast Asia.",
                                      "Maritime law and navigation.",
                                      "Historical architecture.",
                                      "Modern painting techniques."
                            ],
                            "answer": 2,
                            "explanation": "Profesor menyebutkan spesialisasi pengajarannya: \"I, myself, have taught courses in historical architecture\"."
                  },
                  {
                            "id": "l1_44",
                            "number": 44,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "With which of these \"Semester Afloat\" programs was Professor Mackenzie associated?",
                            "options": [
                                      "The eastern Mediterranean program.",
                                      "The Southeast Asian program.",
                                      "The western Mediterranean program.",
                                      "All three programs equally."
                            ],
                            "answer": 0,
                            "explanation": "Ia menyatakan secara spesifik mengajar \"during two eastern Mediterranean programs\"."
                  },
                  {
                            "id": "l1_45",
                            "number": 45,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What does Professor Mackenzie say about \"Semester Afloat\" classes?",
                            "options": [
                                      "They are exactly the same as classes on campus.",
                                      "They require students to spend all day reading books.",
                                      "They allow students to visit historical sites directly (unlike normal classes).",
                                      "They do not offer any academic credits."
                            ],
                            "answer": 2,
                            "explanation": "Keunikan kelas terapung ini dicontohkan dengan belajar teori kuil Yunani di pagi hari dan langsung mengunjungi kuil fisik aslinya secara langsung di siang harinya."
                  },
                  {
                            "id": "l1_46",
                            "number": 46,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "Whom will Professor Mackenzie introduce to the audience next?",
                            "options": [
                                      "The captain of the S.S. Apollo.",
                                      "The Dean of the School of Architecture.",
                                      "A representative from the Greek government.",
                                      "Two students who took part in the program last semester."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat terakhir menutup dengan pengenalan: \"I want to introduce two students who took part in 'Semester Afloat' last semester\"."
                  },
                  {
                            "id": "l1_47",
                            "number": 47,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What aspect of speed skating does the speaker primarily discuss?",
                            "options": [
                                      "The history of speed skating uniform designs.",
                                      "The improvements and control of track ice conditions.",
                                      "Famous world record holders in speed skating.",
                                      "The rules of refereeing speed skating events."
                            ],
                            "answer": 1,
                            "explanation": "Narasi berpusat pada penjelas es track (ice tracks) baik luar ruangan maupun dalam ruangan serta teknologi penjagaan temperatur dan kemurnian air es."
                  },
                  {
                            "id": "l1_48",
                            "number": 48,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What does the speaker imply about speed skaters who competed before the most recent Winter Olympics?",
                            "options": [
                                      "They set more records than today's skaters.",
                                      "They only skated on indoor tracks.",
                                      "They did not participate in the Winter Olympics.",
                                      "They had to skate on outdoor tracks with highly variable conditions."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat \"Until the most recent... speed skating events were held outdoors... Conditions on outdoor ice tracks vary\" menyiratkan bahwa atlet terdahulu menghadapi tantangan cuaca luar ruangan yang tidak menentu."
                  },
                  {
                            "id": "l1_49",
                            "number": 49,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "According to the speaker, what happens to ice that contains too many minerals?",
                            "options": [
                                      "It becomes extremely hard and brittle.",
                                      "It forms heavy frost on the surface.",
                                      "It becomes soft and lacks resistance for skates.",
                                      "It melts at $20^{\\circ}$ Fahrenheit."
                            ],
                            "answer": 2,
                            "explanation": "Penutur menjelaskan secara spesifik: \"Minerals in water make ice soft, and soft ice doesn't provide enough resistance\"."
                  },
                  {
                            "id": "l1_50",
                            "number": 50,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What prediction does the speaker make about the near future?",
                            "options": [
                                      "Indoor tracks will be closed.",
                                      "New world records in speed skating will be achieved.",
                                      "Skaters will use metal tracks instead of ice.",
                                      "Speed skating will become a summer olympic event."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat penutup menyatakan optimisme bahwa pemeliharaan es modern akan: \"almost certainly lead to new world records... in the near future\"."
                  }
      ]
      },
      structure: {
        title: "Section 2: Structure & Written Expression",
        instructions: "Pilihlah struktur tata bahasa yang benar untuk melengkapi kalimat, atau klik kata yang salah pada bagian Written Expression.",
        questions: [
        {
                            "id": "s1_1",
                            "number": 1,
                            "type": "structure_choice",
                            "explanation": "Kalimat ini membutuhkan subjek tunggal yang lengkap sebelum kata kerja \"played\". Pilihan (B) \"The\" adalah kata sandang penentu tunggal (determiner) yang paling tepat untuk mendahului kata benda penjelas subjek \"dancer Isadora Duncan\".",
                            "sentence": "________ dancer Isadora Duncan played a major role in the revolution in dance that took place in the early twentieth century.",
                            "options": [
                                      "Because the",
                                      "The",
                                      "She was a",
                                      "Being a"
                            ],
                            "answer": 1
                  },
                  {
                            "id": "s1_2",
                            "number": 2,
                            "type": "structure_choice",
                            "explanation": "Di bagian belakang kalimat terdapat konjungsi korelatif berpasangan yaitu \"but also\". Pasangan yang tepat dan baku untuk \"but also\" adalah not only (mengikuti pola: not only... but also...).",
                            "sentence": "Water pressure ________ cracks open small rocks but also breaks great slabs of stone from the faces of cliffs.",
                            "options": [
                                      "either",
                                      "not only",
                                      "and so",
                                      "moreover"
                            ],
                            "answer": 1
                  },
                  {
                            "id": "s1_3",
                            "number": 3,
                            "type": "structure_choice",
                            "explanation": "Kalimat ini rumpang di bagian awal dan membutuhkan struktur subjek + kata kerja bantu pengantar keberadaan benda (existential construct). Pilihan (A) \"Basically, there are two\" melengkapi kalimat tersebut secara sempurna.",
                            "sentence": "________ types of guitars: acoustic and electric.",
                            "options": [
                                      "Basically, there are two",
                                      "Two of the basic",
                                      "Basically, two",
                                      "They are two basic"
                            ],
                            "answer": 0
                  },
                  {
                            "id": "s1_4",
                            "number": 4,
                            "type": "structure_choice",
                            "explanation": "Subjek kalimat berbentuk jamak (\"Both longitude and latitude\"), dan kalimat ini membutuhkan kata kerja pasif (passive voice) dalam bentuk waktu sekarang (present tense), yaitu are measured (diukur).",
                            "sentence": "Both longitude and latitude ________ in degrees, minutes, and seconds.",
                            "options": [
                                      "measuring",
                                      "measured",
                                      "are measured",
                                      "being measured"
                            ],
                            "answer": 2
                  },
                  {
                            "id": "s1_5",
                            "number": 5,
                            "type": "structure_choice",
                            "explanation": "Bagian rumpang membutuhkan bentuk to infinitive sebagai kata keterangan penunjuk tujuan (adverb of purpose). Pilihan (A) \"to describe\" adalah bentuk yang paling tepat.",
                            "sentence": "New words are constantly being invented ________ new objects and concepts.",
                            "options": [
                                      "to describe",
                                      "a description of",
                                      "they describe",
                                      "describe"
                            ],
                            "answer": 0
                  },
                  {
                            "id": "s1_6",
                            "number": 6,
                            "type": "structure_choice",
                            "explanation": "Bagian rumpang berada di antara kata sifat (special) dan kata benda (plastic), sehingga membutuhkan kata sifat majemuk (compound adjective) untuk menerangkan plastik tersebut. Bentuk yang tepat adalah friction-reducing (pengurang gesekan).",
                            "sentence": "Modern saw blades are coated with a special ________ plastic.",
                            "options": [
                                      "reduction of friction",
                                      "reduced-friction",
                                      "friction is reduced",
                                      "friction-reducing"
                            ],
                            "answer": 3
                  },
                  {
                            "id": "s1_7",
                            "number": 7,
                            "type": "structure_choice",
                            "explanation": "Karena kalimat ini menggunakan struktur perbandingan tingkat lebih (comparative degree - harder), maka wajib menggunakan kata hubung pembanding than diikuti oleh kata ganti benda penunjuk jamak those (menjadi: than those).",
                            "sentence": "Bricks baked in a kiln are much harder ________ that are dried in the sun.",
                            "options": [
                                      "those",
                                      "than do those",
                                      "than those",
                                      "ones"
                            ],
                            "answer": 2
                  },
                  {
                            "id": "s1_8",
                            "number": 8,
                            "type": "structure_choice",
                            "explanation": "Bagian rumpang membutuhkan kata tanya penghubung (conjunctive adverb) untuk membentuk klausa kata benda (noun clause) yang bertindak sebagai subjek kalimat sebelum kata kerja \"is not known\". Kata yang tepat adalah how (bagaimana).",
                            "sentence": "Exactly ________ humans domesticated animals is not known.",
                            "options": [
                                      "how",
                                      "by means of",
                                      "if",
                                      "by which"
                            ],
                            "answer": 0
                  },
                  {
                            "id": "s1_9",
                            "number": 9,
                            "type": "structure_choice",
                            "explanation": "Bagian rumpang membutuhkan frasa aposisi (appositive phrase) untuk menerangkan karya \"Showboat\". Pilihan (D) \"one of the finest\" melengkapi aposisi tersebut tanpa menambahkan subjek ganda yang tidak perlu.",
                            "sentence": "Jerome Kern's most famous work is Showboat, ________ most enduring musical comedies.",
                            "options": [
                                      "it is one of the finest",
                                      "of the finest one",
                                      "the finest one",
                                      "one of the finest"
                            ],
                            "answer": 3
                  },
                  {
                            "id": "s1_10",
                            "number": 10,
                            "type": "structure_choice",
                            "explanation": "Bagian awal kalimat membutuhkan kata hubung penunjuk waktu/syarat (adverbial subordinator) untuk menghubungkan anak kalimat dengan induk kalimat (\"it begins to move...\"). Kata yang tepat adalah Whenever a (setiap kali sebuah).",
                            "sentence": "________ snowfield on a mountain slope reaches a depth of about 100 feet, it begins to move slowly forward under its own weight.",
                            "options": [
                                      "Whenever a",
                                      "A",
                                      "That a",
                                      "Should a"
                            ],
                            "answer": 0
                  },
                  {
                            "id": "s1_11",
                            "number": 11,
                            "type": "structure_choice",
                            "explanation": "Ketika membicarakan dua hal secara spesifik (\"two kinds of tails\"), setelah menyebutkan yang pertama menggunakan kata \"one\", maka untuk menyebutkan hal yang kedua (terakhir) wajib menggunakan frasa pembatas the other.",
                            "sentence": "Most comets have two kinds of tails, one made up of dust, ________ made up of electrically charged particles called plasma.",
                            "options": [
                                      "one another",
                                      "the other",
                                      "other ones",
                                      "each other"
                            ],
                            "answer": 1
                  },
                  {
                            "id": "s1_12",
                            "number": 12,
                            "type": "structure_choice",
                            "explanation": "Untuk menghubungkan klausa non-restriktif tambahan penjelas kuantitas dari kata benda \"steamboats\", pola susunan kata yang benar adalah penunjuk kuantitas + preposisi + kata ganti relatif (many of which).",
                            "sentence": "By 1820, there were over sixty steamboats on the Mississippi River, ________ were quite luxurious.",
                            "options": [
                                      "many of them",
                                      "which many",
                                      "many of which",
                                      "many that"
                            ],
                            "answer": 2
                  },
                  {
                            "id": "s1_13",
                            "number": 13,
                            "type": "structure_choice",
                            "explanation": "Bagian rumpang membutuhkan bentuk penyederhanaan klausa pasif (reduced passive clause / participle phrase). Kata kerja partisip lampau Built (yang dibangun) adalah bentuk yang benar, kependekan dari \"Which was built\".",
                            "sentence": "________ in 1772, Maryland's state capitol is still in use and is one of the most attractive public buildings in the United States.",
                            "options": [
                                      "It was built",
                                      "Built",
                                      "To build it",
                                      "Building"
                            ],
                            "answer": 1
                  },
                  {
                            "id": "s1_14",
                            "number": 14,
                            "type": "structure_choice",
                            "explanation": "Kalimat yang diawali dengan keterangan tempat (place expression / \"Four miles off...\") mengharuskan terjadinya inversi subjek dan kata kerja penuh tanpa kata kerja bantu (Subject-Verb Inversion), sehingga susunannya menjadi: kata kerja (lies) + subjek utama (the island of Martha's Vineyard).",
                            "sentence": "Four miles off the southeastern coast of Massachusetts ________, a popular summer resort.",
                            "options": [
                                      "lies the island of Martha's Vineyard",
                                      "the island of Martha's Vineyard lies there",
                                      "does lie the island of Martha's Vineyard",
                                      "where the island of Martha's Vineyard lies"
                            ],
                            "answer": 0
                  },
                  {
                            "id": "s1_15",
                            "number": 15,
                            "type": "structure_choice",
                            "explanation": "Ungkapan negatif baku bahasa Inggris untuk menyatakan \"tidak lagi\" adalah no longer, bukan not longer atau never longer. PART B: Written Expression (Questions 16 - 40) Petunjuk: Identifikasilah satu kata atau frasa bergaris bawah (ditandai dengan huruf A, B, C, atau D) yang salah atau tidak sesuai dengan aturan tata bahasa Inggris standar.",
                            "sentence": "Copperplate, a highly ornate form of handwriting, is ________ longer in common use.",
                            "options": [
                                      "not",
                                      "none",
                                      "never",
                                      "no"
                            ],
                            "answer": 3
                  },
                  {
                            "id": "s1_16",
                            "number": 16,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: written. Kata kerja partisip lampau (past participle) yaitu written harus digunakan untuk menggantikan bentuk present participle aktif yaitu writing. Bentuk past participle pasif ini berfungsi untuk menyederhanakan (reduce) klausa relatif yang menggunakan kata kerja pasif. Struktur \"In an essay written in 1779\" merupakan cara singkat untuk menyatakan \"In an essay that was written in 1779\".",
                            "sentence": "In an essay writing in 1779, Judith Sargeant Murray promoted the cause of women's education.",
                            "sentenceParts": [
                                      {
                                                "text": "In an "
                                      },
                                      {
                                                "text": "essay",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " "
                                      },
                                      {
                                                "text": "writing",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " in 1779, Judith Sargeant Murray promoted the cause "
                                      },
                                      {
                                                "text": "of",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " women's "
                                      },
                                      {
                                                "text": "education",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "B"
                  },
                  {
                            "id": "s1_17",
                            "number": 17,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: itself (atau it). Kata ganti tunggal (singular pronoun) yaitu itself harus digunakan menggantikan kata ganti jamak themselves karena kata ganti tersebut merujuk kembali kepada frasa kata benda tunggal (singular noun phrase) yaitu \"A metallic object\".",
                            "sentence": "A metallic object that is in contact with a magnet becomes a magnet themselves.",
                            "sentenceParts": [
                                      {
                                                "text": "A",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " metallic object "
                                      },
                                      {
                                                "text": "that",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " is in contact with a magnet becomes a "
                                      },
                                      {
                                                "text": "magnet",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " "
                                      },
                                      {
                                                "text": "themselves",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "D"
                  },
                  {
                            "id": "s1_18",
                            "number": 18,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: abruptly. Kata keterangan (adverb) yaitu abruptly harus digunakan untuk menggantikan kata sifat (adjective) abrupt karena berfungsi untuk menerangkan sebuah kata kerja (modify a verb) yaitu \"occurs\".",
                            "sentence": "The change from summer to winter occurs very abrupt in the tundra regions of North America.",
                            "sentenceParts": [
                                      {
                                                "text": "The change "
                                      },
                                      {
                                                "text": "from",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " summer to winter "
                                      },
                                      {
                                                "text": "occurs",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " very "
                                      },
                                      {
                                                "text": "abrupt",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " in the tundra "
                                      },
                                      {
                                                "text": "regions",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": " of North America."
                                      }
                            ],
                            "answer": "C"
                  },
                  {
                            "id": "s1_19",
                            "number": 19,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: by means of. Kata depan (preposition) yaitu of telah diabaikan/dihilangkan dari susunan frasa tetap \"by means of\" (yang berarti \"dengan menggunakan\" atau \"melalui\").",
                            "sentence": "In outer space, spacecraft can be channeled by means small steering rockets.",
                            "sentenceParts": [
                                      {
                                                "text": "In",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " outer space, spacecraft can "
                                      },
                                      {
                                                "text": "be",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " channeled "
                                      },
                                      {
                                                "text": "by means",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " small "
                                      },
                                      {
                                                "text": "steering",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": " rockets."
                                      }
                            ],
                            "answer": "C"
                  },
                  {
                            "id": "s1_20",
                            "number": 20,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: bounce. Bentuk kata kerja jamak (plural verb form) yaitu bounce sangat diperlukan di sini agar sesuai dengan subjek klausa yang berbentuk jamak (plural subject) yaitu \"sound waves\".",
                            "sentence": "Echoes occur when sound waves strike a smooth surface and bounces backwards.",
                            "sentenceParts": [
                                      {
                                                "text": "Echoes occur "
                                      },
                                      {
                                                "text": "when",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " sound "
                                      },
                                      {
                                                "text": "waves",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " strike a "
                                      },
                                      {
                                                "text": "smooth",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " surface and "
                                      },
                                      {
                                                "text": "bounces",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": " backwards."
                                      }
                            ],
                            "answer": "D"
                  },
                  {
                            "id": "s1_21",
                            "number": 21,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: carpenter. Pemilihan kata benda di sini salah. Kata yang benar adalah carpenter. Kata \"carpentry\" merujuk pada bidang keilmuan atau industrinya, sedangkan kata \"carpenter\" merujuk pada orang (profesi) yang bekerja di bidang tersebut.",
                            "sentence": "A good carpentry must possess a wide variety of skills.",
                            "sentenceParts": [
                                      {
                                                "text": "A good "
                                      },
                                      {
                                                "text": "carpentry",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " must "
                                      },
                                      {
                                                "text": "possess",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " a wide "
                                      },
                                      {
                                                "text": "variety",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " of "
                                      },
                                      {
                                                "text": "skills",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "A"
                  },
                  {
                            "id": "s1_22",
                            "number": 22,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: who (atau that). Kata ganti relatif (relative pronoun) who digunakan khusus untuk merujuk pada manusia (persons). Sebaliknya, kata ganti which digunakan untuk merujuk pada benda mati (inanimate things). Karena merujuk pada kata \"president\", maka wajib menggunakan who.",
                            "sentence": "Grover Cleveland was the only American president which served two nonconsecutive terms.",
                            "sentenceParts": [
                                      {
                                                "text": "Grover Cleveland was the "
                                      },
                                      {
                                                "text": "only",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " American president "
                                      },
                                      {
                                                "text": "which",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " "
                                      },
                                      {
                                                "text": "served",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " two nonconsecutive "
                                      },
                                      {
                                                "text": "terms",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "B"
                  },
                  {
                            "id": "s1_23",
                            "number": 23,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: her. Kata sifat kepemilikan (possessive adjective) yaitu her harus digunakan menggantikan kata sandang penentu the untuk memperjelas bahwa karir yang dimaksud adalah karir dari orang tertentu (Mary Gardner).",
                            "sentence": "The American soprano Mary Gardner, who had one of the greatest operatic voices of her era, retired at the height of the career.",
                            "sentenceParts": [
                                      {
                                                "text": "The American soprano Mary Gardner, who "
                                      },
                                      {
                                                "text": "had",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " one of the "
                                      },
                                      {
                                                "text": "greatest",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " operatic voices of her era, retired at the "
                                      },
                                      {
                                                "text": "height",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " of "
                                      },
                                      {
                                                "text": "the",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": " career."
                                      }
                            ],
                            "answer": "D"
                  },
                  {
                            "id": "s1_24",
                            "number": 24,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: when the sky is. Susunan kata (word order) yang benar adalah when the sky is. Ungkapan \"when the sky is clear\" bertindak sebagai sebuah klausa kata keterangan (adverb clause), bukan kalimat tanya langsung; oleh karena itu, susunan katanya wajib menggunakan aturan pernyataan umum (subject + verb), bukan verb + subject.",
                            "sentence": "On nights when is the sky clear and the air calm, the Earth's surface rapidly radiates heat into the atmosphere.",
                            "sentenceParts": [
                                      {
                                                "text": "On nights when "
                                      },
                                      {
                                                "text": "is the sky",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " clear and the air "
                                      },
                                      {
                                                "text": "calm",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": ", the Earth's surface "
                                      },
                                      {
                                                "text": "rapidly",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " radiates heat "
                                      },
                                      {
                                                "text": "into",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": " the atmosphere."
                                      }
                            ],
                            "answer": "A"
                  },
                  {
                            "id": "s1_25",
                            "number": 25,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: and. Pola kata sambung berpasangan korelatif (correlative conjunction) yang benar dan baku adalah both ... and.",
                            "sentence": "Dreams are commonly made up of both visual or verbal images.",
                            "sentenceParts": [
                                      {
                                                "text": "Dreams are "
                                      },
                                      {
                                                "text": "commonly",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " made up "
                                      },
                                      {
                                                "text": "of",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " both visual "
                                      },
                                      {
                                                "text": "or",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " verbal "
                                      },
                                      {
                                                "text": "images",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "C"
                  },
                  {
                            "id": "s1_26",
                            "number": 26,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: closes. Agar sejajar (parallel) dengan kata-kata kerja sebelumnya yang berbentuk waktu sekarang tunggal (makes dan lines), kata kerja penutupnya harus menggunakan kata kerja tunggal reguler yaitu closes menggantikan bentuk kata kerja -ing (closing).",
                            "sentence": "The trap-door spider makes a hole in the ground, lines it with silk, and closing it with a hinged door.",
                            "sentenceParts": [
                                      {
                                                "text": "The trap-door spider "
                                      },
                                      {
                                                "text": "makes",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " a hole in the ground, lines it with "
                                      },
                                      {
                                                "text": "silk",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": ", and "
                                      },
                                      {
                                                "text": "closing",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " it with a hinged "
                                      },
                                      {
                                                "text": "door",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "C"
                  },
                  {
                            "id": "s1_27",
                            "number": 27,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: loss. Kita membutuhkan kelas kata benda (noun) yaitu loss setelah kata sifat penjelas (\"extreme\"), bukan menggunakan bentuk kata kerja partisip/lampau yaitu lost.",
                            "sentence": "Sleepiness is one symptom of hypothermia, the extreme lost of body heat.",
                            "sentenceParts": [
                                      {
                                                "text": "Sleepiness "
                                      },
                                      {
                                                "text": "is",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " one "
                                      },
                                      {
                                                "text": "symptom",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " of hypothermia, the "
                                      },
                                      {
                                                "text": "extreme",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " "
                                      },
                                      {
                                                "text": "lost",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": " of body heat."
                                      }
                            ],
                            "answer": "D"
                  },
                  {
                            "id": "s1_28",
                            "number": 28,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: made. Kata kerja made (dari kata dasar make) harus digunakan untuk menggantikan kata kerja done karena merujuk pada konstruksi perakitan fisik suatu benda (\"constructed\") dari bahan mentah.",
                            "sentence": "The flute is the only woodwind instrument that is not done of wood.",
                            "sentenceParts": [
                                      {
                                                "text": "The "
                                      },
                                      {
                                                "text": "flute",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " is the "
                                      },
                                      {
                                                "text": "only",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " woodwind instrument that is not "
                                      },
                                      {
                                                "text": "done",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " of "
                                      },
                                      {
                                                "text": "wood",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "C"
                  },
                  {
                            "id": "s1_29",
                            "number": 29,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: wealth. Berdasarkan aturan kesejajaran unsur (parallel structure), untuk menyejajarkan kelas kata dengan kata benda lainnya di dalam deretan tersebut (status dan love), kita harus menggunakan kata benda wealth, bukan menggunakan bentuk kata sifat wealthy.",
                            "sentence": "F. Scott Fitzgerald's novel The Great Gatsby is about the pursuit of wealthy, status, and love in the 1920s.",
                            "sentenceParts": [
                                      {
                                                "text": "F. Scott Fitzgerald's novel The Great Gatsby is "
                                      },
                                      {
                                                "text": "about",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " the "
                                      },
                                      {
                                                "text": "pursuit",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " of "
                                      },
                                      {
                                                "text": "wealthy",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": ", status, and "
                                      },
                                      {
                                                "text": "love",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": " in the 1920s."
                                      }
                            ],
                            "answer": "C"
                  },
                  {
                            "id": "s1_30",
                            "number": 30,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: is. Kata kerja tunggal (singular verb) yaitu is harus digunakan untuk menggantikan kata kerja jamak are agar sesuai dengan subjek tunggalnya yaitu coloring. (Kata benda warna red, orange, dan brown hanyalah kata sifat penjelas, bukan subjek utama).",
                            "sentence": "Whenever there are red, orange, or brown coloring in sandstone, iron ore is probably present.",
                            "sentenceParts": [
                                      {
                                                "text": "Whenever "
                                      },
                                      {
                                                "text": "there",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " "
                                      },
                                      {
                                                "text": "are",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " red, orange, or brown coloring in sandstone, iron ore is "
                                      },
                                      {
                                                "text": "probably",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " "
                                      },
                                      {
                                                "text": "present",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "B"
                  },
                  {
                            "id": "s1_31",
                            "number": 31,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: and (atau and also). Kata also tidak dapat digunakan sendirian untuk menghubungkan klausa-klausa dari suatu kalimat secara independen; kata hubung and atau and also harus digunakan.",
                            "sentence": "Feathers keep birds warm and dry also enable them to fly.",
                            "sentenceParts": [
                                      {
                                                "text": "Feathers keep birds "
                                      },
                                      {
                                                "text": "warm",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " and dry "
                                      },
                                      {
                                                "text": "also",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " enable "
                                      },
                                      {
                                                "text": "them",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " to "
                                      },
                                      {
                                                "text": "fly",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "B"
                  },
                  {
                            "id": "s1_32",
                            "number": 32,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: ripen. Setelah partikel infinitif to, kita harus menggunakan kata kerja bentuk dasar (verb) yaitu ripen (mematangkan), bukan bentuk kata sifat (adjective) ripe (matang).",
                            "sentence": "Some species of penicillin mold are used to ripe cheeses.",
                            "sentenceParts": [
                                      {
                                                "text": "Some",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " species of penicillin mold are "
                                      },
                                      {
                                                "text": "used",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " to "
                                      },
                                      {
                                                "text": "ripe",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " "
                                      },
                                      {
                                                "text": "cheeses",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "C"
                  },
                  {
                            "id": "s1_33",
                            "number": 33,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: Since. Kata depan (preposition) yang benar untuk melengkapi kalimat ini adalah Since (sejak). Hal ini ditandai oleh penggunaan bentuk kata kerja waktu present perfect di dalam klausa, yaitu \"have devoted\".",
                            "sentence": "In about 1920, experimental psychologists have devoted more research to learning than to any other topic.",
                            "sentenceParts": [
                                      {
                                                "text": "In",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " about 1920, experimental "
                                      },
                                      {
                                                "text": "psychologists",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " have devoted more research to "
                                      },
                                      {
                                                "text": "learning",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " than to any other "
                                      },
                                      {
                                                "text": "topic",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "A"
                  },
                  {
                            "id": "s1_34",
                            "number": 34,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: found. Dalam sebuah frasa kata kerja berbentuk pasif (passive verb phrase / to be + V3), bentuk partisip lampau (past participle) yaitu found harus digunakan menggantikan bentuk kata kerja dasar (find).",
                            "sentence": "Natural asphalt lakes are find in many parts of the world.",
                            "sentenceParts": [
                                      {
                                                "text": "Natural asphalt "
                                      },
                                      {
                                                "text": "lakes",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " are "
                                      },
                                      {
                                                "text": "find",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " in many "
                                      },
                                      {
                                                "text": "parts",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " of "
                                      },
                                      {
                                                "text": "the",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": " world."
                                      }
                            ],
                            "answer": "B"
                  },
                  {
                            "id": "s1_35",
                            "number": 35,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: another. Bentuk kata penunjuk tunggal yang tepat untuk mengakhiri kalimat pembanding ini adalah another, bukan menggunakan kata other yang tidak didahului artikel penentu.",
                            "sentence": "All living creatures pass on inherited traits from one generation to other.",
                            "sentenceParts": [
                                      {
                                                "text": "All",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " living creatures pass on "
                                      },
                                      {
                                                "text": "inherited",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " traits "
                                      },
                                      {
                                                "text": "from",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " one generation to "
                                      },
                                      {
                                                "text": "other",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "D"
                  },
                  {
                            "id": "s1_36",
                            "number": 36,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: took place. Bentuk frasa kata kerja masa lampau (past verb form) yang benar untuk menyatakan \"terjadi\" adalah took place (dari kata dasar take place). Menambahkan akhiran -ed pada kata benda tempat (place) adalah kesalahan pembentukan kata.",
                            "sentence": "Many of the events that led up to the American Revolution took placed in Massachusetts.",
                            "sentenceParts": [
                                      {
                                                "text": "Many of the events that "
                                      },
                                      {
                                                "text": "led",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " up to "
                                      },
                                      {
                                                "text": "the",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " American Revolution took "
                                      },
                                      {
                                                "text": "placed",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " in "
                                      },
                                      {
                                                "text": "Massachusetts",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "C"
                  },
                  {
                            "id": "s1_37",
                            "number": 37,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: machines (atau diubah menjadi bentuk tunggal noncount: machinery). Kata machinery tergolong sebagai kata benda tidak dapat dihitung (noncount noun) sehingga tidak dapat diletakkan dalam bentuk jamak akhiran -ies. Jika ingin merujuk ke bentuk jamak dapat dihitung, kata benda machines adalah bentuk yang benar.",
                            "sentence": "Mass production is the manufacture of machineries and other articles in standard sizes and large numbers.",
                            "sentenceParts": [
                                      {
                                                "text": "Mass "
                                      },
                                      {
                                                "text": "production",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " is the manufacture of "
                                      },
                                      {
                                                "text": "machineries",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " and other articles in "
                                      },
                                      {
                                                "text": "standard",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " sizes and large "
                                      },
                                      {
                                                "text": "numbers",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "B"
                  },
                  {
                            "id": "s1_38",
                            "number": 38,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: many. Kata penunjuk kuantitas many harus digunakan untuk menggantikan much sebelum kata benda jamak dapat dihitung (plural count noun) seperti kata people (meskipun kata people tidak berakhiran huruf -s, ia tetap merupakan kata jamak).",
                            "sentence": "Not much people realize that apples have been cultivated for over 3,000 years.",
                            "sentenceParts": [
                                      {
                                                "text": "Not "
                                      },
                                      {
                                                "text": "much",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " people "
                                      },
                                      {
                                                "text": "realize",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " that apples have been "
                                      },
                                      {
                                                "text": "cultivated",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " for over 3,000 "
                                      },
                                      {
                                                "text": "years",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "A"
                  },
                  {
                            "id": "s1_39",
                            "number": 39,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: almost entirely. Susunan tata letak kata keterangan (word order of adverbs) yang tepat adalah meletakkan kata keterangan penunjuk tingkat derajat (almost) mendahului kata keterangan yang diterangkannya (entirely).",
                            "sentence": "The destructive force of running water depends entirely almost on the velocity of its flow.",
                            "sentenceParts": [
                                      {
                                                "text": "The "
                                      },
                                      {
                                                "text": "destructive",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " force of "
                                      },
                                      {
                                                "text": "running",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " water depends "
                                      },
                                      {
                                                "text": "entirely almost",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " on the velocity of its "
                                      },
                                      {
                                                "text": "flow",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "C"
                  },
                  {
                            "id": "s1_40",
                            "number": 40,
                            "type": "written_expression",
                            "explanation": "Koreksi yang Benar: native to. Kata sifat (adjective) native harus selalu diikuti oleh kata depan (preposition) to (misalnya: \"native to North America\"). Namun, sebagai catatan tambahan, bentuk kata benda (noun) native barulah umum diikuti oleh kata depan of (seperti: \"She is a native of Texas\").",
                            "sentence": "The eastern bluebird is considered the most attractive bird native of North America by many bird-watchers.",
                            "sentenceParts": [
                                      {
                                                "text": "The "
                                      },
                                      {
                                                "text": "eastern",
                                                "underline": true,
                                                "label": "A"
                                      },
                                      {
                                                "text": " bluebird is considered the most "
                                      },
                                      {
                                                "text": "attractive",
                                                "underline": true,
                                                "label": "B"
                                      },
                                      {
                                                "text": " bird "
                                      },
                                      {
                                                "text": "native of",
                                                "underline": true,
                                                "label": "C"
                                      },
                                      {
                                                "text": " North America by many "
                                      },
                                      {
                                                "text": "bird-watchers",
                                                "underline": true,
                                                "label": "D"
                                      },
                                      {
                                                "text": "."
                                      }
                            ],
                            "answer": "C"
                  }
      ]
      },
      reading: {
        title: "Section 3: Reading Comprehension",
        instructions: "Bacalah teks di bawah ini dan pilih jawaban terbaik berdasarkan informasi di dalam bacaan.",
        passages: [
                  {
                            "id": "p1",
                            "text": "Just as optical fibers have transformed communication, they are also revolutionizing medicine. These ultra-thin, flexible fibers have opened a window into the living tissues of the body. By inserting optical fibers through natural openings or small incisions and threading them along the body's established pathways, physicians can look into the lungs, intestines, heart, and other areas that were formerly inaccessible to them. The basic fiber-optics system is called a fiberscope, which consists of two bundles of fibers. One, the illuminating bundle, carries light to the tissues. It is coupled to a high-intensity light source. Light enters the cores of the high-purity silicon glass and travels along the fibers. A lens at the end of the bundle collects the light and focuses it into the other bundle, the imaging bundle. Each fiber in the bundle transmits only a tiny fraction of the total image. The reconstructed image can be viewed through an eyepiece or displayed on a television screen. During the last five years, improved methods of fabricating optical fibers have led to a reduction in fiberscope diameter and an increase in the number of fibers, which in turn has increased resolution. Optical fibers can also be used to deliver laser light. By use of laser beams, physicians can perform surgery inside the body, sometimes eliminating the need for invasive procedures in which healthy tissue must be cut through to reach the site of disease. Many of these procedures do not require anesthesia and can be performed in a physician's office. These techniques have reduced the risk and the cost of medical care.",
                            "questions": [
                                      {
                                                "id": "r1_1",
                                                "number": 1,
                                                "question": "What is the main subject of the passage?",
                                                "options": [
                                                          "A revolution in communication",
                                                          "The invention of optical fibers",
                                                          "New surgical techniques",
                                                          "The role of optical fibers in medicine"
                                                ],
                                                "answer": 3,
                                                "explanation": "Teks di atas membahas secara menyeluruh mengenai peranan teknologi serat optik (optical fibers) di bidang medis (kedokteran)."
                                      },
                                      {
                                                "id": "r1_2",
                                                "number": 2,
                                                "question": "In line 2, the author uses the expression \"have opened a window\" to indicate that the use of optical fibers",
                                                "options": [
                                                          "has enabled scientists to make amazing discoveries",
                                                          "sometimes requires a surgical incision",
                                                          "allows doctors to see inside the body without major surgery",
                                                          "has been unknown to the general public until quite recently"
                                                ],
                                                "answer": 2,
                                                "explanation": "Ungkapan 'have opened a window' (telah membuka jendela) di sini menyiratkan bahwa teknologi serat optik memungkinkan dokter melihat bagian dalam tubuh manusia tanpa melakukan operasi pembedahan besar."
                                      },
                                      {
                                                "id": "r1_3",
                                                "number": 3,
                                                "question": "Which of the following is closest in meaning to the word \"formerly\" in line 6?",
                                                "options": [
                                                          "Previously",
                                                          "Completely",
                                                          "Usually",
                                                          "Theoretically"
                                                ],
                                                "answer": 0,
                                                "explanation": "Kata 'formerly' berarti sebelumnya atau di masa lampau, yang memiliki makna terdekat dengan 'previously'."
                                      },
                                      {
                                                "id": "r1_4",
                                                "number": 4,
                                                "question": "The word \"them\" in line 6 refers to",
                                                "options": [
                                                          "optical fibers",
                                                          "pathways",
                                                          "other areas of the body",
                                                          "physicians"
                                                ],
                                                "answer": 3,
                                                "explanation": "Kata ganti 'them' merujuk kepada subjek 'physicians' (dokter) yang sebelumnya menghadapi kesulitan mengakses area tubuh tersebut."
                                      },
                                      {
                                                "id": "r1_5",
                                                "number": 5,
                                                "question": "According to the passage, what is the purpose of the illuminating bundle in a fiberscope?",
                                                "options": [
                                                          "To carry light into the body",
                                                          "To collect and focus light",
                                                          "To reconstruct images",
                                                          "To perform surgery inside the body"
                                                ],
                                                "answer": 0,
                                                "explanation": "Sesuai informasi di paragraf kedua, berkas iluminasi ('illuminating bundle') bertugas membawa cahaya masuk menyinari jaringan di dalam tubuh."
                                      },
                                      {
                                                "id": "r1_6",
                                                "number": 6,
                                                "question": "Which of the following is closest in meaning to the word \"cores\" in line 9?",
                                                "options": [
                                                          "Tips",
                                                          "Centers",
                                                          "Clusters",
                                                          "Lines"
                                                ],
                                                "answer": 1,
                                                "explanation": "Kata 'cores' merujuk ke bagian inti terdalam dari serat kaca, sehingga bersinonim dengan 'centers' (pusat)."
                                      },
                                      {
                                                "id": "r1_7",
                                                "number": 7,
                                                "question": "According to the passage, how do the fiberscopes used today differ from those used five years ago?",
                                                "options": [
                                                          "They use brighter lights.",
                                                          "They are longer.",
                                                          "They contain more fibers.",
                                                          "They are larger in diameter."
                                                ],
                                                "answer": 2,
                                                "explanation": "Dibandingkan versi 5 tahun lalu, fiberscope modern mengandung lebih banyak serat kaca ('contain more fibers') sehingga resolusi gambarnya meningkat tajam."
                                      },
                                      {
                                                "id": "r1_8",
                                                "number": 8,
                                                "question": "The word \"resolution\" in line 17 is closest in meaning to which of the following?",
                                                "options": [
                                                          "Strength",
                                                          "Sharpness",
                                                          "Inconvenience",
                                                          "Efficiency"
                                                ],
                                                "answer": 1,
                                                "explanation": "Kata 'resolution' dalam konteks visual berarti ketajaman atau kejelasan dari gambar yang diproyeksikan ('sharpness')."
                                      },
                                      {
                                                "id": "r1_9",
                                                "number": 9,
                                                "question": "Which of the following is NOT mentioned by the author as one of the advantages of laser surgery techniques?",
                                                "options": [
                                                          "They can be performed in a physician's office.",
                                                          "They are safer than conventional surgery.",
                                                          "They can often be performed without anesthesia.",
                                                          "They are relatively easy to teach to physicians."
                                                ],
                                                "answer": 3,
                                                "explanation": "Keuntungan kemudahan pengajaran ke dokter ('easy to teach') tidak disebutkan di paragraf ketiga sebagai kelebihan bedah laser."
                                      },
                                      {
                                                "id": "r1_10",
                                                "number": 10,
                                                "question": "Where in the passage does the author provide a basic description of a fiberscope?",
                                                "options": [
                                                          "Lines 1-3",
                                                          "Lines 7-8",
                                                          "Lines 13-14",
                                                          "Line 18"
                                                ],
                                                "answer": 1,
                                                "explanation": "Deskripsi dasar fiberscope dibahas di awal paragraf kedua (baris 7-8) yang menjelaskan susunan dua jenis berkas serat optik."
                                      }
                            ]
                  },
                  {
                            "id": "p2",
                            "text": "Alice Walker has written books of poetry and short stories, a biography, and several novels. She is probably best known for her novel The Color Purple, published in 1982. The book vividly narrates the richness and complexity of black people - especially black women - in Georgia in the 1920s and 1930s. Although the novel came under bitter attack by certain critics and readers, it was applauded by others and won both the American Book Award and the Pulitzer Prize for fiction. It became a bestseller, selling over 4 million copies, and it was made into a successful film by noted director Steven Spielberg. The novel reveals the horror, drudgery, and joy of black life in rural Georgia. It gets much of its special flavor from its use of the words, rhythm, and grammar of black English and from its epistolary style. Telling a story through letters was a narrative structure commonly used by eighteenth-century novelists, but it is not often used in contemporary fiction. Unlike most epistolary novels, which have the effect of distancing the reader from the events described by the letter writer, The Color Purple uses the letter form to draw the reader into absolute intimacy with the poor, uneducated, but wonderfully observant Celie, the main character of the novel. So the reader applauds when Celie, like William Faulkner's character Dilsey, does not simply survive, but prevails.",
                            "questions": [
                                      {
                                                "id": "r1_11",
                                                "number": 11,
                                                "question": "What is the passage mainly about?",
                                                "options": [
                                                          "A film by Steven Spielberg",
                                                          "The life of Alice Walker",
                                                          "Characters in the novels of William Faulkner",
                                                          "A book by Alice Walker and reactions to it"
                                                ],
                                                "answer": 3,
                                                "explanation": "Teks tersebut berfokus mendiskusikan buku novel 'The Color Purple' karya Alice Walker dan bagaimana reaksi pro-kontra kritikus terhadap buku tersebut."
                                      },
                                      {
                                                "id": "r1_12",
                                                "number": 12,
                                                "question": "According to the passage, The Color Purple is a book of",
                                                "options": [
                                                          "poetry",
                                                          "criticism",
                                                          "fiction",
                                                          "biography"
                                                ],
                                                "answer": 2,
                                                "explanation": "Novel 'The Color Purple' tergolong ke dalam karya fiksi sastra ('fiction')."
                                      },
                                      {
                                                "id": "r1_13",
                                                "number": 13,
                                                "question": "The word \"vividly\" in line 3 is closest in meaning to",
                                                "options": [
                                                          "intellectually",
                                                          "graphically",
                                                          "surprisingly",
                                                          "temporarily"
                                                ],
                                                "answer": 1,
                                                "explanation": "Kata 'vividly' (secara hidup/jelas) memiliki makna paling dekat dengan 'graphically' (secara visual/jelas)."
                                      },
                                      {
                                                "id": "r1_14",
                                                "number": 14,
                                                "question": "Which of the following is closest in meaning to the word \"drudgery\" in line 9?",
                                                "options": [
                                                          "Hard work",
                                                          "Culture",
                                                          "Uniqueness",
                                                          "Long history"
                                                ],
                                                "answer": 0,
                                                "explanation": "Kata 'drudgery' merujuk kepada pekerjaan kasar yang berat dan menjemukan ('hard work')."
                                      },
                                      {
                                                "id": "r1_15",
                                                "number": 15,
                                                "question": "The author mentions eighteenth-century novelists (line 13) because",
                                                "options": [
                                                          "their books, like The Color Purple, made use of the epistolary style",
                                                          "The Color Purple is based on episodes in their books",
                                                          "their novels have a sense of absolute intimacy",
                                                          "their books, like those of Alice Walker, were attacked by critics but enjoyed by readers"
                                                ],
                                                "answer": 0,
                                                "explanation": "Penulis menyebutkan novelis abad ke-18 karena mereka lazim menggunakan gaya penceritaan lewat surat ('epistolary style') seperti halnya novel 'The Color Purple'."
                                      },
                                      {
                                                "id": "r1_16",
                                                "number": 16,
                                                "question": "Why does the author mention Dilsey in line 17?",
                                                "options": [
                                                          "He is a main character in The Color Purple.",
                                                          "He is similar to Celie in one way.",
                                                          "He is the person on whom Celie was based.",
                                                          "He wrote a book somewhat similar to The Color Purple."
                                                ],
                                                "answer": 1,
                                                "explanation": "Dilsey dari karya Faulkner disebutkan untuk menunjukkan kemiripan karakter Celie yang tidak hanya bertahan hidup, tetapi juga sukses/menang."
                                      },
                                      {
                                                "id": "r1_17",
                                                "number": 17,
                                                "question": "The word \"prevails\" in line 19 is closest in meaning to",
                                                "options": [
                                                          "changes",
                                                          "resists",
                                                          "triumphs",
                                                          "impresses"
                                                ],
                                                "answer": 2,
                                                "explanation": "Kata 'prevails' dalam konteks perjuangan hidup berarti memperoleh kemenangan/kejayaan ('triumphs')."
                                      },
                                      {
                                                "id": "r1_18",
                                                "number": 18,
                                                "question": "The attitude of the author toward The Color Purple is best described as one of",
                                                "options": [
                                                          "admiration",
                                                          "alarm",
                                                          "indifference",
                                                          "anger"
                                                ],
                                                "answer": 0,
                                                "explanation": "Penulis menunjukkan rasa kagum ('admiration') terhadap keunikan struktur penceritaan novel karya Alice Walker tersebut."
                                      }
                            ]
                  },
                  {
                            "id": "p3",
                            "text": "Many flowering plants woo insect pollinators and gently direct them to their most fertile blossoms by changing the color of individual flowers from day to day. Through color cues, the plant signals to the insect that it would be better off visiting one flower on its bush than another. The particular hue tells the pollinator that the flower is full of far more pollen than are neighboring blooms. That nectar-rich flower also happens to be fertile and ready to disperse its pollen or to receive pollen the insect has picked up from another flower. Plants do not have to spend precious resources maintaining reservoirs of nectar in all their flowers. Thus, the color-coded communication system benefits both plant and insect. For example, on the lantana plant, a flower starts out on the first day as yellow, when it is rich with pollen and nectar. Influenced by an as-yet-unidentified environmental signal, the flower changes color by triggering the production of the pigment anthromyacin. It turns orange on the second day and red on the third. By the third day, it has no pollen to offer insects and is no longer fertile. On any given lantana bush, only 10 to 15 percent of the blossoms are likely to be yellow and fertile. But in tests measuring the responsiveness of butterflies, it was discovered that the insects visited the yellow flowers at least 100 times more than would be expected from haphazard visitation. Experiments with paper flowers and painted flowers demonstrated that the butterflies were responding to color cues rather than, say, the scent of the nectar. In other types of plants, blossoms change from white to red, others from yellow to red, and so on. These color changes have been observed in some 74 families of plants.",
                            "questions": [
                                      {
                                                "id": "r1_19",
                                                "number": 19,
                                                "question": "The first paragraph of the passage implies that insects benefit from the color-coded communication system because",
                                                "options": [
                                                          "the colors hide them from predators",
                                                          "they can gather pollen efficiently",
                                                          "the bright colors attract fertile females",
                                                          "other insect species cannot understand the code"
                                                ],
                                                "answer": 1,
                                                "explanation": "Sistem komunikasi kode warna pada kelopak bunga sangat membantu serangga agar dapat mengumpulkan serbuk sari secara cepat dan efisien tanpa membuang energi."
                                      },
                                      {
                                                "id": "r1_20",
                                                "number": 20,
                                                "question": "The word \"woo\" in line 1 is closest in meaning to",
                                                "options": [
                                                          "frighten",
                                                          "trap",
                                                          "deceive",
                                                          "attract"
                                                ],
                                                "answer": 3,
                                                "explanation": "Kata 'woo' memiliki makna puitis menarik hati atau memikat ('attract')."
                                      },
                                      {
                                                "id": "r1_21",
                                                "number": 21,
                                                "question": "The word \"it\" in line 3 refers to",
                                                "options": [
                                                          "a plant",
                                                          "an insect",
                                                          "a signal",
                                                          "a blossom"
                                                ],
                                                "answer": 1,
                                                "explanation": "Kata ganti 'it' merujuk ke subjek 'insect' (serangga) yang sedang mendatangi kelopak bunga."
                                      },
                                      {
                                                "id": "r1_22",
                                                "number": 22,
                                                "question": "The word \"hue\" in line 5 is closest in meaning to",
                                                "options": [
                                                          "smell",
                                                          "texture",
                                                          "color",
                                                          "shape"
                                                ],
                                                "answer": 2,
                                                "explanation": "Kata 'hue' adalah istilah teknis visual yang berarti corak warna ('color')."
                                      },
                                      {
                                                "id": "r1_23",
                                                "number": 23,
                                                "question": "The word \"Thus\" in line 9 is closest in meaning to which of the following?",
                                                "options": [
                                                          "However",
                                                          "Therefore",
                                                          "Probably",
                                                          "Generally"
                                                ],
                                                "answer": 1,
                                                "explanation": "Kata penghubung 'Thus' bermakna akibatnya atau oleh karena itu ('Therefore')."
                                      },
                                      {
                                                "id": "r1_24",
                                                "number": 24,
                                                "question": "Which of the following describes the sequence of color changes that lantana blossoms undergo?",
                                                "options": [
                                                          "Red to yellow to white",
                                                          "White to red",
                                                          "Yellow to orange to red",
                                                          "Red to purple"
                                                ],
                                                "answer": 2,
                                                "explanation": "Siklus perubahan warna pada bunga lantana adalah kuning di hari pertama, menjadi oranye di hari kedua, dan merah di hari ketiga (Yellow to orange to red)."
                                      },
                                      {
                                                "id": "r1_25",
                                                "number": 25,
                                                "question": "The word \"triggering\" in line 13 is closest in meaning to",
                                                "options": [
                                                          "maintaining",
                                                          "renewing",
                                                          "limiting",
                                                          "activating"
                                                ],
                                                "answer": 3,
                                                "explanation": "Kata 'triggering' memiliki arti memicu atau mengaktifkan ('activating')."
                                      },
                                      {
                                                "id": "r1_26",
                                                "number": 26,
                                                "question": "The passage implies that insects would be most attracted to lantana blossoms",
                                                "options": [
                                                          "on the first day that they bloom",
                                                          "when they turn orange",
                                                          "on the third day that they bloom",
                                                          "after they produce anthromyacin"
                                                ],
                                                "answer": 0,
                                                "explanation": "Serangga paling tertarik pada bunga lantana di hari pertama (saat berwarna kuning) karena saat itulah kandungan nektar dan pollennya paling melimpah."
                                      },
                                      {
                                                "id": "r1_27",
                                                "number": 27,
                                                "question": "According to the passage, what is the purpose of the experiments involving paper flowers and painted flowers?",
                                                "options": [
                                                          "To strengthen the idea that butterflies are attracted by the smell of flowers",
                                                          "To prove that flowers do not always need pollen to reproduce",
                                                          "To demonstrate how insects change color depending on the type of flowers they visit",
                                                          "To support the idea that insects respond to the changing color of flowers"
                                                ],
                                                "answer": 3,
                                                "explanation": "Eksperimen bunga kertas membuktikan bahwa kupu-kupu merespons rangsangan visual berupa warna bunga, bukan karena aromanya."
                                      },
                                      {
                                                "id": "r1_28",
                                                "number": 28,
                                                "question": "The word \"haphazard\" in line 20 is closest in meaning to which of the following?",
                                                "options": [
                                                          "Dangerous",
                                                          "Random",
                                                          "Fortunate",
                                                          "Expected"
                                                ],
                                                "answer": 1,
                                                "explanation": "Kata 'haphazard' dalam statistik atau probabilitas berarti acak ('random')."
                                      },
                                      {
                                                "id": "r1_29",
                                                "number": 29,
                                                "question": "What is known from the passage about the other types of plants mentioned in line 23?",
                                                "options": [
                                                          "They follow various sequences of color changes.",
                                                          "They use scent and other methods of attracting pollinators.",
                                                          "They have not been studied as thoroughly as the lantana.",
                                                          "They have exactly the same pigments as the lantana."
                                                ],
                                                "answer": 0,
                                                "explanation": "Tanaman jenis lain juga mengalami perubahan warna dengan pola/urutan transisi warna yang berbeda-beda."
                                      },
                                      {
                                                "id": "r1_30",
                                                "number": 30,
                                                "question": "According to the passage, in approximately how many families of plants has the color-changing phenomenon described in the passage been observed?",
                                                "options": [
                                                          "10",
                                                          "15",
                                                          "74",
                                                          "100"
                                                ],
                                                "answer": 2,
                                                "explanation": "Sesuai paragraf terakhir, fenomena perubahan warna ini telah dijumpai pada sekitar 74 famili tanaman berbeda."
                                      }
                            ]
                  },
                  {
                            "id": "p4",
                            "text": "The 1960s, however, saw a rising dissatisfaction with the Modernist movement, especially in North America where its failings were exposed in two influential books, Jane Jacobs' The Death and Life of Great American Cities in 1961 and Robert Venturi's Complexity and Contradiction in Architecture in 1966. Jacobs highlighted the destruction of the richness of American cities by massive, impersonal buildings. Venturi implied that Modernist structures were without meaning because they lacked the complexity and intimacy of historical buildings. This dissatisfaction was translated into action in 1972 with the demolition of several fourteen-story Modernist apartment blocks that only twenty years before had won architectural prizes. Similar housing developments were destroyed elsewhere in North America in the following decades, but it was in St. Louis that the post-Modernist era began. Post-Modernist architects have little in common in terms of style or theory. They are united mainly in their opposition to the Modernist style. Robert Venturi's designs show wit, humanity, and historical reference. These tendencies can be seen in his bold design for the Tucker House (1975) in Katonah, New York, and the Brant-Johnson House (1975) in Vail, Colorado, which owes something to the Italian Renaissance. Similar characteristics are apparent in the work of Venturi's disciple Michael Graves. Graves' Portland Public Service Building (1982) in Portland, Oregon, and his Humana Tower (1986) in Louisville, Kentucky, have the bulk of skyscrapers but incorporate historical souvenirs such as colonnades, belvederes, keystones, and decorative sculpture. Other post-Modernists rejected the playfulness of Venturi and his group. They chose a more historically faithful classical style, as in Greenberg and Blateau's reception rooms at the U.S. Department of State in Washington, D.C. (1984-86). The most complete instance of historical accuracy is the J. Paul Getty Museum in Malibu, California (1970-75), designed by Langdon and Wilson. They relied on archaeological advice to achieve the authentic quality of a Roman villa.",
                            "questions": [
                                      {
                                                "id": "r1_31",
                                                "number": 31,
                                                "question": "With which of the following topics did the paragraph preceding the passage probably deal?",
                                                "options": [
                                                          "The Modernist movement",
                                                          "Architecture outside North America",
                                                          "A history of post-modernism",
                                                          "Books of the 1950s"
                                                ],
                                                "answer": 0,
                                                "explanation": "Penggunaan konjungsi kontras 'however' di awal teks menunjukkan bahwa paragraf sebelumnya mendiskusikan puncak atau sejarah dari gerakan arsitektur Modernis."
                                      },
                                      {
                                                "id": "r1_32",
                                                "number": 32,
                                                "question": "Which of the following is closest in meaning to the word highlighted in line 5?",
                                                "options": [
                                                          "Celebrated",
                                                          "Denied",
                                                          "Emphasized",
                                                          "Exaggerated"
                                                ],
                                                "answer": 2,
                                                "explanation": "Kata 'highlighted' (disorot/ditonjolkan) bermakna terdekat dengan 'emphasized' (ditekankan)."
                                      },
                                      {
                                                "id": "r1_33",
                                                "number": 33,
                                                "question": "The word \"they\" in line 7 refers to",
                                                "options": [
                                                          "historical buildings",
                                                          "Venturi and Jacobs",
                                                          "North American cities",
                                                          "Modernist structures"
                                                ],
                                                "answer": 3,
                                                "explanation": "Kata ganti 'they' merujuk kembali kepada subjek jamak 'Modernist structures' (bangunan/struktur Modernis) yang dinilai kurang memiliki kedekatan historis."
                                      },
                                      {
                                                "id": "r1_34",
                                                "number": 34,
                                                "question": "According to the passage, what do the two books mentioned in the first paragraph have in common?",
                                                "options": [
                                                          "They were both written by the same author.",
                                                          "They both lack complexity.",
                                                          "They are both critical of Modernism.",
                                                          "They both outline post-Modernist theory."
                                                ],
                                                "answer": 2,
                                                "explanation": "Kedua buku tersebut memiliki kesamaan yaitu sama-sama mengkritik kegagalan dari gerakan arsitektur Modernis."
                                      },
                                      {
                                                "id": "r1_35",
                                                "number": 35,
                                                "question": "According to the author, which event signalled the beginning of post-Modernism?",
                                                "options": [
                                                          "The publication of a book",
                                                          "The building of a housing development",
                                                          "The awarding of a prize",
                                                          "The destruction of some buildings"
                                                ],
                                                "answer": 3,
                                                "explanation": "Era post-Modernis secara simbolis dimulai dari pembongkaran beberapa gedung apartemen Modernis berlantai 14 di St. Louis."
                                      },
                                      {
                                                "id": "r1_36",
                                                "number": 36,
                                                "question": "The author mentions that a house designed by Robert Venturi in a style influenced by the Italian Renaissance was built in",
                                                "options": [
                                                          "Katonah, New York",
                                                          "Vail, Colorado",
                                                          "Portland, Oregon",
                                                          "Louisville, Kentucky"
                                                ],
                                                "answer": 1,
                                                "explanation": "Rumah Brant-Johnson yang dipengaruhi gaya Renaisans Italia dibangun di kota Vail, Colorado."
                                      },
                                      {
                                                "id": "r1_37",
                                                "number": 37,
                                                "question": "Which of the following is closest in meaning to \"disciple\" in line 20?",
                                                "options": [
                                                          "Adviser",
                                                          "Follower",
                                                          "Critic",
                                                          "Partner"
                                                ],
                                                "answer": 1,
                                                "explanation": "Kata 'disciple' dalam bidang akademik atau profesi berarti pengikut/murid ('follower')."
                                      },
                                      {
                                                "id": "r1_38",
                                                "number": 38,
                                                "question": "What does the author imply about the Portland Public Service Building and the Humana Building?",
                                                "options": [
                                                          "They are popular places for tourists to visit and to buy souvenirs.",
                                                          "They have great historical significance.",
                                                          "They feature elements not generally seen in modern buildings.",
                                                          "They are much smaller than most skyscrapers."
                                                ],
                                                "answer": 2,
                                                "explanation": "Gedung-gedung tersebut memasukkan ornamen dekoratif sejarah masa lalu yang umumnya diabaikan dan tidak terlihat di bangunan modern biasa."
                                      },
                                      {
                                                "id": "r1_39",
                                                "number": 39,
                                                "question": "The J. Paul Getty Museum is given as an example of",
                                                "options": [
                                                          "a massive, impersonal Modernist building",
                                                          "a faithful reproduction of classical architecture",
                                                          "a typical Malibu structure",
                                                          "playful architecture"
                                                ],
                                                "answer": 1,
                                                "explanation": "Museum J. Paul Getty menjadi contoh replika fisik arsitektur klasik Romawi yang dikonstruksi secara akurat."
                                      }
                            ]
                  },
                  {
                            "id": "p5",
                            "text": "While many nineteenth-century reformers hoped to bring about reform through education or by eliminating specific social evils, some thinkers wanted to start over and remake society by founding ideal, cooperative communities. The United States seemed to them a spacious and unencumbered country where models of a perfect society could succeed. These communitarian thinkers hoped their success would lead to imitation, until communities free of crime, poverty, and other social ills would cover the land. A number of religious groups, notably the Shakers, practiced communal living, but the main impetus to found model communities came from nonreligious, rationalistic thinkers. Among the communitarian philosophers, three of the most influential were Robert Owen, Charles Fourier, and John Humphrey Noyes. Owen, famous for his humanitarian policies as owner of several thriving textile mills in Scotland, believed that a faulty environment was to blame for human problems and that these problems could be eliminated in a rationally planned society. In 1825 he put his principles into practice at New Harmony, Indiana. The community failed economically after a few years but not before achieving a number of social successes. Fourier, a commercial employee in France, never visited the United States. However, his theories of cooperative living influenced many Americans through the writings of Albert Brisbane, whose Social Destiny of Man explained Fourierism and its self-sufficient associations or 'phalanxes.' One or more of these phalanxes was organized in every Northern state. The most famous were Red Bank, New Jersey, and Brook Farm, Massachusetts. An early member of the latter was the author Nathaniel Hawthorne. Noyes founded the most enduring and probably the oddest of the utopian communities, the Oneida Community of upstate New York. Needless to say, none of these experiments had any lasting effects on the patterns of American society.",
                            "questions": [
                                      {
                                                "id": "r1_40",
                                                "number": 40,
                                                "question": "The main topic of the passage is",
                                                "options": [
                                                          "nineteenth-century schools",
                                                          "American reformers",
                                                          "the philosophy of Fourierism",
                                                          "model communities in the nineteenth century"
                                                ],
                                                "answer": 3,
                                                "explanation": "Topik utama bacaan adalah tentang pendirian komunitas-komunitas percontohan (model/utopian communities) di Amerika Serikat pada abad ke-19."
                                      },
                                      {
                                                "id": "r1_41",
                                                "number": 41,
                                                "question": "Which of the following is NOT given in the passage as one of the general goals of communitarian philosophers?",
                                                "options": [
                                                          "To remake society",
                                                          "To spread their ideas throughout the United States",
                                                          "To establish ideal communities",
                                                          "To create opportunities through education"
                                                ],
                                                "answer": 3,
                                                "explanation": "Meskipun pendidikan penting, menciptakan kesempatan lewat pendidikan bukanlah tujuan utama dari para filosof komunitarian tersebut."
                                      },
                                      {
                                                "id": "r1_42",
                                                "number": 42,
                                                "question": "The Shakers are mentioned in line 8 as an example of",
                                                "options": [
                                                          "a communal religious group",
                                                          "radical reformers",
                                                          "rationalistic thinkers",
                                                          "an influential group of writers"
                                                ],
                                                "answer": 0,
                                                "explanation": "Kelompok Shakers merupakan contoh nyata dari kelompok religius yang menerapkan konsep hidup bersama secara komunal."
                                      },
                                      {
                                                "id": "r1_43",
                                                "number": 43,
                                                "question": "Which of the following is closest in meaning to the word \"impetus\" in line 8?",
                                                "options": [
                                                          "Stimulus",
                                                          "Commitment",
                                                          "Drawback",
                                                          "Foundation"
                                                ],
                                                "answer": 0,
                                                "explanation": "Kata 'impetus' berarti dorongan atau rangsangan ('stimulus')."
                                      },
                                      {
                                                "id": "r1_44",
                                                "number": 44,
                                                "question": "Which of the following is closest in meaning to the word \"thriving\" in line 12?",
                                                "options": [
                                                          "Prosperous",
                                                          "Famous",
                                                          "Failing",
                                                          "Pioneering"
                                                ],
                                                "answer": 0,
                                                "explanation": "Kata 'thriving' (tumbuh subur) dalam konteks industri tekstil berarti makmur/berkembang pesat ('prosperous')."
                                      },
                                      {
                                                "id": "r1_45",
                                                "number": 45,
                                                "question": "The \"phalanxes\" described in the second paragraph were an idea originally conceived by",
                                                "options": [
                                                          "Albert Brisbane",
                                                          "Robert Owen",
                                                          "Charles Fourier",
                                                          "John Humphrey Noyes"
                                                ],
                                                "answer": 2,
                                                "explanation": "Konsep pemukiman mandiri 'phalanxes' awalnya digagas oleh Charles Fourier di Prancis."
                                      },
                                      {
                                                "id": "r1_46",
                                                "number": 46,
                                                "question": "Why does the author mention Nathaniel Hawthorne in line 23?",
                                                "options": [
                                                          "He founded Brook Farm in Massachusetts.",
                                                          "He was a critic of Charles Fourier.",
                                                          "He wrote a book that led to the establishment of model communities.",
                                                          "He was at one time a member of the Brook Farm community."
                                                ],
                                                "answer": 3,
                                                "explanation": "Penulis menyebutkan Nathaniel Hawthorne karena sastrawan tersebut pernah terdaftar menjadi anggota di komunitas Brook Farm."
                                      },
                                      {
                                                "id": "r1_47",
                                                "number": 47,
                                                "question": "Which of the following communities lasted longest?",
                                                "options": [
                                                          "New Harmony",
                                                          "The Oneida Community",
                                                          "Red Bank",
                                                          "Brook Farm"
                                                ],
                                                "answer": 1,
                                                "explanation": "Komunitas Oneida di New York merupakan eksperimen utopian yang bertahan paling lama ('most enduring')."
                                      },
                                      {
                                                "id": "r1_48",
                                                "number": 48,
                                                "question": "The word \"oddest\" in line 24 is closest in meaning to which of the following?",
                                                "options": [
                                                          "Earliest",
                                                          "Most independent",
                                                          "Largest",
                                                          "Most unusual"
                                                ],
                                                "answer": 3,
                                                "explanation": "Kata 'oddest' (paling aneh) dalam konteks keunikan komunitas Oneida berarti paling tidak biasa ('most unusual')."
                                      },
                                      {
                                                "id": "r1_49",
                                                "number": 49,
                                                "question": "The author implies that, for readers, the conclusion of the passage is",
                                                "options": [
                                                          "obvious",
                                                          "surprising",
                                                          "absurd",
                                                          "practical"
                                                ],
                                                "answer": 0,
                                                "explanation": "Kalimat penutup 'none of these experiments had any lasting effects' menyiratkan bahwa kegagalan eksperimen tersebut bagi pembaca adalah hal yang sudah jelas/bisa di tebak ('obvious')."
                                      },
                                      {
                                                "id": "r1_50",
                                                "number": 50,
                                                "question": "Why did the author probably divide the passage into two paragraphs?",
                                                "options": [
                                                          "To compare nineteenth-century reforms with twentieth-century reforms",
                                                          "To present an over view of a concept in the first paragraph and specific examples in the second",
                                                          "To contrast the work of utopian thinkers with that of practical reformers",
                                                          "To give the causes for a phenomenon in the first paragraph and its consequences in the second"
                                                ],
                                                "answer": 1,
                                                "explanation": "Paragraf pertama memberikan gambaran konsep umum pemukiman komunitarian, sedangkan paragraf kedua memaparkan contoh-contoh spesifik tokohnya (Owen, Fourier, Noyes)."
                                      }
                            ]
                  }
        ]
      }
    }
  },
  test2: {
    id: "test2",
    title: "Practice Test 2",
    sections: {
      listening: {
        title: "Section 1: Listening Comprehension",
        instructions: "Pilihlah jawaban terbaik untuk setiap pertanyaan setelah mendengarkan percakapan.",
        questions: [
        {
                            "id": "l1_1",
                            "number": 1,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I can't find those photographs I just had developed."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I think I saw them on the piano."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks the photos are in the developer's shop.",
                                      "She will help the man look for the photos.",
                                      "She believes the photos are on the piano.",
                                      "She doesn't know where the photos are."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyatakan bahwa ia melihat foto-foto tersebut berada di atas piano (\"on the piano\")."
                  },
                  {
                            "id": "l1_2",
                            "number": 2,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Fred sure was angry."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'll say. He left without saying goodbye to anyone."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Fred?"
                                      }
                            ],
                            "question": "What does the man say about Fred?",
                            "options": [
                                      "Fred forgot to say goodbye.",
                                      "Fred was happy to leave early.",
                                      "Fred didn't have time to say goodbye.",
                                      "Fred left in a bad mood without saying goodbye."
                            ],
                            "answer": 3,
                            "explanation": "Pria tersebut menyetujui kemarahan Fred (\"I'll say\") dan menambahkan bahwa Fred pergi begitu saja tanpa mengucapkan selamat tinggal kepada siapa pun."
                  },
                  {
                            "id": "l1_3",
                            "number": 3,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "What an uncomfortable-looking chair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Well, it may look that way - but just try it out!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "The chair is indeed very uncomfortable.",
                                      "She doesn't want the man to sit on it.",
                                      "The chair is actually more comfortable than it looks.",
                                      "She is going to buy a new chair soon."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyarankan pria itu untuk mencobanya terlebih dahulu (\"just try it out\"), menyiratkan bahwa kursi tersebut sebenarnya nyaman meski tampak tidak demikian."
                  },
                  {
                            "id": "l1_4",
                            "number": 4,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "So, where are the rose gardens? Didn't you say they were here on the west side of the park?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "No, no I said they were on the east side."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "The rose gardens are on the east side of the park.",
                                      "She doesn't know where the rose gardens are.",
                                      "The gardens have been moved to another park.",
                                      "She prefers the west side of the park."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut meralat asumsi pria itu dan menegaskan bahwa kebun mawar berada di sebelah timur (\"on the east side\")."
                  },
                  {
                            "id": "l1_5",
                            "number": 5,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "George, is Linda leaving tonight?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think that's what she said."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does George say about Linda?"
                                      }
                            ],
                            "question": "What does George say about Linda?",
                            "options": [
                                      "Linda is staying for another night.",
                                      "He believes Linda is leaving tonight as she mentioned.",
                                      "Linda has already left the building.",
                                      "He is not sure if Linda is leaving at all."
                            ],
                            "answer": 1,
                            "explanation": "George meyakini Linda akan pergi malam ini berdasarkan apa yang pernah Linda katakan (\"I think that's what she said\")."
                  },
                  {
                            "id": "l1_6",
                            "number": 6,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Two weeks' work down the drain!"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, no your experiment wasn't successful?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about the man from this conversation?"
                                      }
                            ],
                            "question": "What is learned about the man from this conversation?",
                            "options": [
                                      "He has been working for only two weeks.",
                                      "His experiment was not successful.",
                                      "He needs to drain the water from his lab.",
                                      "He is going to take a two-week vacation."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan \"down the drain\" adalah idiom yang berarti sia-sia atau terbuang percuma, mengonfirmasi kegagalan eksperimennya."
                  },
                  {
                            "id": "l1_7",
                            "number": 7,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I see Carrie's riding her bike again. Did she fix it herself?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think she got her brother to do it."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man believe about Carrie?"
                                      }
                            ],
                            "question": "What does the man believe about Carrie?",
                            "options": [
                                      "She fixed the bicycle herself.",
                                      "She bought a new bicycle.",
                                      "She doesn't know how to ride a bike.",
                                      "She had her brother repair the bicycle."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"got her brother to do it\" mengindikasikan Carrie meminta saudara laki-lakinya untuk memperbaiki sepeda tersebut."
                  },
                  {
                            "id": "l1_8",
                            "number": 8,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Did the band play for about 2 hours?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No. This time, the concert was over in an hour and a half."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "How long did the concert last?"
                                      }
                            ],
                            "question": "How long did the concert last?",
                            "options": [
                                      "Two hours.",
                                      "Exactly one hour.",
                                      "One and a half hours.",
                                      "More than two hours."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut membantah durasi 2 jam dan menyatakan konser selesai dalam satu setengah jam (\"an hour and a half\")."
                  },
                  {
                            "id": "l1_9",
                            "number": 9,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe you could get a ride to campus with Peggy tomorrow."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Oh, Peggy no longer drives to class."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Peggy?"
                                      }
                            ],
                            "question": "What does the man say about Peggy?",
                            "options": [
                                      "Peggy no longer drives to class.",
                                      "Peggy will give the man a ride tomorrow.",
                                      "Peggy is not going to class tomorrow.",
                                      "Peggy has a new car."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu menjelaskan secara lugas bahwa Peggy sudah tidak mengemudikan kendaraan ke kelas lagi (\"no longer drives to class\")."
                  },
                  {
                            "id": "l1_10",
                            "number": 10,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Swimming is good exercise."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Of course. And so is dancing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks swimming is better than dancing.",
                                      "She doesn't like to swim or dance.",
                                      "Dancing is also good exercise.",
                                      "She wants to go swimming today."
                            ],
                            "answer": 2,
                            "explanation": "Ungkapan \"so is dancing\" memiliki arti persetujuan bahwa menari juga merupakan olahraga yang baik sama seperti berenang."
                  },
                  {
                            "id": "l1_11",
                            "number": 11,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I need to go out. Is it still raining?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Yes, but it's starting to let up a little."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She wants to go out with the man.",
                                      "It is starting to rain less hard.",
                                      "It is raining harder than before.",
                                      "She doesn't want the man to go out."
                            ],
                            "answer": 1,
                            "explanation": "Idiom \"let up\" dalam konteks cuaca hujan berarti mereda atau berkurang intensitasnya."
                  },
                  {
                            "id": "l1_12",
                            "number": 12,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Then you and Robert finished your project on time?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes - no thanks to Robert!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "Robert did most of the work on the project.",
                                      "Robert was not helpful in finishing the project.",
                                      "She is very grateful for Robert's help.",
                                      "They were unable to complete the project on time."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan sinis \"no thanks to Robert\" menunjukkan bahwa proyek selesai bukan karena kontribusi Robert, melainkan karena kerja keras mandiri sang wanita."
                  },
                  {
                            "id": "l1_13",
                            "number": 13,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "I just heard that Professor Hendrix is retiring at the end of the semester."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Too bad - I was hoping to take his chemistry course next semester."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about Professor Hendrix from this conversation?"
                                      }
                            ],
                            "question": "What is learned about Professor Hendrix from this conversation?",
                            "options": [
                                      "He will teach chemistry next semester.",
                                      "He is starting a new course in chemistry.",
                                      "He has decided not to retire after all.",
                                      "He is retiring and will not teach next semester."
                            ],
                            "answer": 3,
                            "explanation": "Frasa \"Professor Hendrix is retiring\" mengonfirmasi bahwa sang profesor pensiun, sehingga ia tidak akan mengajar lagi di semester berikutnya."
                  },
                  {
                            "id": "l1_14",
                            "number": 14,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like some flowers delivered to Hillcrest Hospital."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Certainly. If you step over here, I'll show you some arrangements."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is the man going to do?"
                                      }
                            ],
                            "question": "What is the man going to do?",
                            "options": [
                                      "Choose some flower arrangements.",
                                      "Go to Hillcrest Hospital himself.",
                                      "Deliver flowers to a friend.",
                                      "Plant some flowers in the garden."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut menawarkan untuk menunjukkan rangkaian bunga (\"show you some arrangements\"), yang mengarahkan pria itu untuk memilih dekorasi bunga yang diinginkan."
                  },
                  {
                            "id": "l1_15",
                            "number": 15,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "My watch isn't running."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Why not have the jeweler around the corner fix it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman suggest the man do?"
                                      }
                            ],
                            "question": "What does the woman suggest the man do?",
                            "options": [
                                      "Buy a new watch from the jeweler.",
                                      "Run around the corner to check the time.",
                                      "Fix the watch himself.",
                                      "Have his watch repaired by a jeweler."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"have the jeweler fix it\" menyarankan agar pria tersebut membawa jam tangannya yang mati ke toko perhiasan/jam terdekat untuk diperbaiki."
                  },
                  {
                            "id": "l1_16",
                            "number": 16,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Just think - in another couple of days, I'll be in Montreal."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "How will you get around once you get there?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman ask the man?"
                                      }
                            ],
                            "question": "What does the woman ask the man?",
                            "options": [
                                      "When he is leaving for Montreal.",
                                      "If he has friends in Montreal.",
                                      "How he will travel around Montreal.",
                                      "Why he decided to go to Montreal."
                            ],
                            "answer": 2,
                            "explanation": "Pertanyaan \"How will you get around\" menanyakan sarana transportasi atau metode perjalanan yang akan digunakan pria tersebut saat berada di kota Montreal."
                  },
                  {
                            "id": "l1_17",
                            "number": 17,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I'm exhausted. I can't wait for the weekend to get here."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Need a little rest, do you?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "He agrees that the woman needs some rest.",
                                      "He is also exhausted from work.",
                                      "He cannot wait for the weekend either.",
                                      "He does not think the woman worked hard."
                            ],
                            "answer": 0,
                            "explanation": "Pertanyaan retoris pria itu mengonfirmasi situasi wanita tersebut dan menyetujui bahwa ia memang membutuhkan waktu istirahat."
                  },
                  {
                            "id": "l1_18",
                            "number": 18,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Diane is always saying she loves to go ice-skating."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yes, but when's the last time you actually saw her out on the ice?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man imply about Diane?"
                                      }
                            ],
                            "question": "What does the man imply about Diane?",
                            "options": [
                                      "Diane is a very professional ice-skater.",
                                      "He has seen Diane skating recently.",
                                      "Diane has never gone ice-skating.",
                                      "Diane does not go skating very often."
                            ],
                            "answer": 3,
                            "explanation": "Pertanyaan retoris pria itu \"kapan terakhir kali kamu benar-benar melihatnya di atas es?\" menyiratkan bahwa Diane sebenarnya jarang sekali melakukan olahraga seluncur es meskipun ia mengaku menyukainya."
                  },
                  {
                            "id": "l1_19",
                            "number": 19,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like to return this sweater because it's too small. I don't have the receipt with me, though."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "You could exchange the sweater for another size. But if you don't have the receipt, I won't be able to give you your money back."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He can get his money back if he exchanges the size.",
                                      "He cannot exchange the sweater for another size.",
                                      "He needs to buy a larger size sweater.",
                                      "He cannot get a refund without a receipt."
                            ],
                            "answer": 3,
                            "explanation": "Penjual wanita menegaskan secara jelas bahwa tanpa struk pembelian (\"without the receipt\"), ia tidak dapat memproses pengembalian uang (\"refund\")."
                  },
                  {
                            "id": "l1_20",
                            "number": 20,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Have you ever eaten at the Fisherman's Grotto?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Have I? I never go to the beach without stopping there."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She has never eaten at the Fisherman's Grotto.",
                                      "She does not like eating at the beach.",
                                      "She always eats there when she goes to the beach.",
                                      "The restaurant is too far from the beach."
                            ],
                            "answer": 2,
                            "explanation": "Respons bermakna penekanan ganda \"I never go to the beach without stopping there\" berarti ia selalu menyempatkan diri mampir makan di restoran tersebut setiap pergi ke pantai."
                  },
                  {
                            "id": "l1_21",
                            "number": 21,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Brenda, will you play that song you wrote?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Only if you accompany me on the guitar."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Brenda want the man to do?"
                                      }
                            ],
                            "question": "What does Brenda want the man to do?",
                            "options": [
                                      "Play the guitar while she sings or plays.",
                                      "Write a new song for her.",
                                      "Teach her how to play the guitar.",
                                      "Listen to her song quietly."
                            ],
                            "answer": 0,
                            "explanation": "Brenda bersedia memainkan lagunya hanya jika pria itu mengiringinya menggunakan gitar (\"accompany me on the guitar\")."
                  },
                  {
                            "id": "l1_22",
                            "number": 22,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'm planning to clean up the kitchen this afternoon."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Shouldn't you clean the rest of your apartment while you're at it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He should wait until tomorrow to clean.",
                                      "He should clean the other rooms of the apartment too.",
                                      "The kitchen is already clean enough.",
                                      "She will help him clean the apartment."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat \"Shouldn't you clean the rest of your apartment\" menyarankan agar pria tersebut tidak hanya membersihkan dapur saja, melainkan ruangan lainnya juga."
                  },
                  {
                            "id": "l1_23",
                            "number": 23,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "That was a great play, wasn't it?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yeah, the cast was wonderful. I could hardly believe they weren't professional actors."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "The actors in the play were very unprofessional.",
                                      "The acting was exceptionally good.",
                                      "He wanted to become a professional actor himself.",
                                      "He did not enjoy the theater play."
                            ],
                            "answer": 1,
                            "explanation": "Pujian \"could hardly believe they weren't professional\" menegaskan bahwa kualitas akting para pemeran amat bagus layaknya aktor profesional."
                  },
                  {
                            "id": "l1_24",
                            "number": 24,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "There are only a few drops left in the can. I guess we'll have to buy some in the morning."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, we can finish up this job tomorrow. Let's just wash out our brushes for now."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What will they probably buy in the morning?"
                                      }
                            ],
                            "question": "What will they probably buy in the morning?",
                            "options": [
                                      "New paintbrushes.",
                                      "A new can of water.",
                                      "More paint.",
                                      "Some breakfast food."
                            ],
                            "answer": 2,
                            "explanation": "Berdasarkan petunjuk penggunaan kuas (\"brushes\") dan sisa cairan di dalam kaleng (\"drops left in the can\"), objek yang akan habis dan perlu dibeli esok hari adalah cat tembok."
                  },
                  {
                            "id": "l1_25",
                            "number": 25,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Jim, can I have one of those bananas you bought?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Sorry - they're still not ripe enough."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Jim mean?"
                                      }
                            ],
                            "question": "What does Jim mean?",
                            "options": [
                                      "He wants to save the bananas for tomorrow.",
                                      "The bananas are too expensive to share.",
                                      "The bananas have already gone bad.",
                                      "The bananas are not ready to be eaten yet."
                            ],
                            "answer": 3,
                            "explanation": "Istilah \"not ripe enough\" berarti buah pisang tersebut belum cukup matang untuk dikonsumsi saat ini."
                  },
                  {
                            "id": "l1_26",
                            "number": 26,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "The students in Professor Murray's class think that the test he gave was unfair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "A few of them do, anyway."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What can be inferred from this conversation?"
                                      }
                            ],
                            "question": "What can be inferred from this conversation?",
                            "options": [
                                      "Most of the students did not think the test was unfair.",
                                      "The test was cancelled by Professor Murray.",
                                      "All students failed the exam.",
                                      "Professor Murray is going to change the test grades."
                            ],
                            "answer": 0,
                            "explanation": "Koreksi \"A few of them do, anyway\" mengindikasikan hanya sebagian kecil mahasiswa yang menganggap ujian itu tidak adil, yang berarti mayoritas mahasiswa merasa ujian tersebut adil-adil saja."
                  },
                  {
                            "id": "l1_27",
                            "number": 27,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "John sure knows some good places to eat, doesn't he?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yeah, when it comes to finding great restaurants, John wrote the book."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman say about John?"
                                      }
                            ],
                            "question": "What does the woman say about John?",
                            "options": [
                                      "John has written a cookbook about restaurants.",
                                      "John reads books while eating at restaurants.",
                                      "John is an expert at finding good restaurants.",
                                      "John does not like eating at local restaurants."
                            ],
                            "answer": 2,
                            "explanation": "Idiom \"wrote the book\" pada suatu bidang berarti orang tersebut adalah pakar/ahli yang sangat berpengalaman di bidang tersebut."
                  },
                  {
                            "id": "l1_28",
                            "number": 28,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Look at my face! I got sunburned again yesterday."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe next time you'll remember to wear your hat when you're working in the garden."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman think the man should do?"
                                      }
                            ],
                            "question": "What does the woman think the man should do?",
                            "options": [
                                      "Stop working in the garden entirely.",
                                      "Wear a hat next time he works in the garden.",
                                      "Put some lotion on his sunburned face.",
                                      "Buy a larger hat from the local market."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut menyarankan agar lain kali pria tersebut memakai topi (\"remember to wear your hat\") ketika berkebun untuk menghindari kulit terbakar matahari."
                  },
                  {
                            "id": "l1_29",
                            "number": 29,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Were any of the windows unlocked?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Not one of them."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "Some of the windows were unlocked.",
                                      "He forgot to check the windows.",
                                      "All of the windows were locked.",
                                      "The windows were broken."
                            ],
                            "answer": 2,
                            "explanation": "Jawaban \"Not one of them\" menegaskan bahwa tidak ada satu pun jendela yang tidak terkunci, yang berarti seluruh jendela dalam keadaan terkunci rapat."
                  },
                  {
                            "id": "l1_30",
                            "number": 30,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Harry, what's your new roommate like?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, for one thing, he's very outgoing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Harry say about his roommate?"
                                      }
                            ],
                            "question": "What does Harry say about his roommate?",
                            "options": [
                                      "He is very friendly and sociable.",
                                      "He likes to stay in the room all day.",
                                      "He is looking for another room.",
                                      "He is very quiet and reserved."
                            ],
                            "answer": 0,
                            "explanation": "Karakteristik \"outgoing\" merujuk pada sifat seseorang yang ramah, terbuka, aktif, dan senang bergaul dengan orang lain."
                  },
                  {
                            "id": "l1_31",
                            "number": 31,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "Why was the woman at first confused when the man asked her for directions?",
                            "options": [
                                      "She did not know where Reynolds Hall was.",
                                      "She knew the building only by its informal name (Art Building).",
                                      "She thought Reynolds Hall was a chemistry building.",
                                      "She didn't hear him clearly."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut awalnya bingung karena nama formal gedung itu (Reynolds Hall) jarang digunakan, sementara orang-orang kampus terbiasa menyebutnya dengan nama \"Art Building\"."
                  },
                  {
                            "id": "l1_32",
                            "number": 32,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "According to the woman, what is directly in front of the Art Building?",
                            "options": [
                                      "A chemistry lab.",
                                      "A main library walkway.",
                                      "A service road.",
                                      "A big abstract metal sculpture."
                            ],
                            "answer": 3,
                            "explanation": "Petunjuk arah terakhir menegaskan terdapat patung logam abstrak berukuran besar (\"a big abstract metal sculpture\") tepat berada di depan gedung tersebut."
                  },
                  {
                            "id": "l1_33",
                            "number": 33,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What can be inferred from the conversation about the man's sister?",
                            "options": [
                                      "She is a graduate student.",
                                      "She is an art professor.",
                                      "She does not like paintings.",
                                      "She works at the campus library."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu datang untuk melihat lukisan saudara perempuannya di dalam pameran yang secara eksplisit didefinisikan sebagai pameran lukisan mahasiswa pascasarjana (\"graduate student paintings\")."
                  },
                  {
                            "id": "l1_34",
                            "number": 34,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What is the woman's attitude toward the man?",
                            "options": [
                                      "Indifferent.",
                                      "Impatient.",
                                      "Suspicious.",
                                      "Helpful and friendly."
                            ],
                            "answer": 3,
                            "explanation": "Wanita tersebut secara sabar memandu rute jalan, mengoreksi kesalahpahaman arah pria itu, dan mendoakan agar ia menikmati pamerannya."
                  },
                  {
                            "id": "l1_35",
                            "number": 35,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "What had Professor Carmichael been talking about when Ted asked her a question?",
                            "options": [
                                      "Space exploration budgets.",
                                      "Einstein's theories of relativity and the speed of light.",
                                      "The history of science fiction movies.",
                                      "The construction of modern telescopes."
                            ],
                            "answer": 1,
                            "explanation": "Pembahasan dimulai dengan mengacu pada pemaparan materi profesor mengenai teori Einstein bahwa tidak ada yang dapat melaju melebihi kecepatan cahaya."
                  },
                  {
                            "id": "l1_36",
                            "number": 36,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "If a ship could travel almost as fast as light, how long would it take to get to the closest star?",
                            "options": [
                                      "A few days.",
                                      "Around 186,000 seconds.",
                                      "Four or five years.",
                                      "Thousands of years."
                            ],
                            "answer": 2,
                            "explanation": "Ted menyatakan jika pesawat melaju mendekati kecepatan cahaya, perjalanan menuju bintang terdekat (berjarak sekitar 4 tahun cahaya) akan memakan waktu empat sampai lima tahun (\"four or five years\")."
                  },
                  {
                            "id": "l1_37",
                            "number": 37,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "According to Professor Carmichael, what must be developed before ships can travel to the closest stars?",
                            "options": [
                                      "A completely different method of powering spaceships.",
                                      "Better astronaut training programs.",
                                      "Faster communication systems.",
                                      "Larger fuel tanks for liquid oxygen."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menegaskan bahan bakar konvensional tidak akan cukup untuk ribuan tahun perjalanan, sehingga manusia membutuhkan metode daya penggerak baru (\"completely different method of powering\")."
                  },
                  {
                            "id": "l1_38",
                            "number": 38,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "How does Professor Carmichael characterize travel to other stars?",
                            "options": [
                                      "Unlikely in the foreseeable future.",
                                      "Completely impossible for all time.",
                                      "Already happening in secret military programs.",
                                      "Easy to achieve with current rocket technology."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menyimpulkan bahwa dalam kurun waktu masa depan terdekat, kapal antarbintang hanya akan eksis di film fiksi ilmiah dan buku saja."
                  },
                  {
                            "id": "l1_39",
                            "number": 39,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Whom is the speaker addressing?",
                            "options": [
                                      "Journalism students on a field trip.",
                                      "Local printing press workers.",
                                      "Experienced newspaper deliverers.",
                                      "Tourists visiting the historical monument."
                            ],
                            "answer": null,
                            "explanation": "Audiens adalah para mahasiswa jurnalisme yang melakukan kunjungan lapangan ke kantor redaksi surat kabar."
                  },
                  {
                            "id": "l1_40",
                            "number": 40,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Where will the people listening to this talk go first?",
                            "options": [
                                      "To the Editorial Department.",
                                      "To the Circulation Department.",
                                      "To the Production Department.",
                                      "To the City Desk."
                            ],
                            "answer": 1,
                            "explanation": "Pembawa tur menyebutkan secara jelas bahwa kunjungan pertama dimulai dari Departemen Sirkulasi (\"We'll begin our tour with a visit to the Circulation Department\")."
                  },
                  {
                            "id": "l1_41",
                            "number": 41,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "According to the speaker, what type of work is done at the City Desk?",
                            "options": [
                                      "Distributing newspapers across the state.",
                                      "Gathering and reporting local news.",
                                      "Printing the final pages of the newspaper.",
                                      "Managing international relations."
                            ],
                            "answer": 1,
                            "explanation": "City Desk di dalam Departemen Editorial didefinisikan memiliki tanggung jawab mengumpulkan dan mengabarkan berita-berita lokal (\"gathering and reporting local news\")."
                  },
                  {
                            "id": "l1_42",
                            "number": 42,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What aspect of the \"Semester Afloat\" program does Professor Mackenzie's talk focus on?",
                            "options": [
                                      "The history of the S.S. Apollo.",
                                      "The cost of student tuition fees.",
                                      "Recreational and sports activities on the ship.",
                                      "The academic program and curriculum."
                            ],
                            "answer": 3,
                            "explanation": "Profesor Mackenzie menyatakan di akhir paragraf pertama: \"tonight I want to talk mainly about the academic program\"."
                  },
                  {
                            "id": "l1_43",
                            "number": 43,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What did Professor Mackenzie teach during the \"Semester Afloat\" programs?",
                            "options": [
                                      "Ancient languages of Southeast Asia.",
                                      "Maritime law and navigation.",
                                      "Historical architecture.",
                                      "Modern painting techniques."
                            ],
                            "answer": 2,
                            "explanation": "Profesor menyebutkan spesialisasi pengajarannya: \"I, myself, have taught courses in historical architecture\"."
                  },
                  {
                            "id": "l1_44",
                            "number": 44,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "With which of these \"Semester Afloat\" programs was Professor Mackenzie associated?",
                            "options": [
                                      "The eastern Mediterranean program.",
                                      "The Southeast Asian program.",
                                      "The western Mediterranean program.",
                                      "All three programs equally."
                            ],
                            "answer": 0,
                            "explanation": "Ia menyatakan secara spesifik mengajar \"during two eastern Mediterranean programs\"."
                  },
                  {
                            "id": "l1_45",
                            "number": 45,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What does Professor Mackenzie say about \"Semester Afloat\" classes?",
                            "options": [
                                      "They are exactly the same as classes on campus.",
                                      "They require students to spend all day reading books.",
                                      "They allow students to visit historical sites directly (unlike normal classes).",
                                      "They do not offer any academic credits."
                            ],
                            "answer": 2,
                            "explanation": "Keunikan kelas terapung ini dicontohkan dengan belajar teori kuil Yunani di pagi hari dan langsung mengunjungi kuil fisik aslinya secara langsung di siang harinya."
                  },
                  {
                            "id": "l1_46",
                            "number": 46,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "Whom will Professor Mackenzie introduce to the audience next?",
                            "options": [
                                      "The captain of the S.S. Apollo.",
                                      "The Dean of the School of Architecture.",
                                      "A representative from the Greek government.",
                                      "Two students who took part in the program last semester."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat terakhir menutup dengan pengenalan: \"I want to introduce two students who took part in 'Semester Afloat' last semester\"."
                  },
                  {
                            "id": "l1_47",
                            "number": 47,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What aspect of speed skating does the speaker primarily discuss?",
                            "options": [
                                      "The history of speed skating uniform designs.",
                                      "The improvements and control of track ice conditions.",
                                      "Famous world record holders in speed skating.",
                                      "The rules of refereeing speed skating events."
                            ],
                            "answer": 1,
                            "explanation": "Narasi berpusat pada penjelas es track (ice tracks) baik luar ruangan maupun dalam ruangan serta teknologi penjagaan temperatur dan kemurnian air es."
                  },
                  {
                            "id": "l1_48",
                            "number": 48,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What does the speaker imply about speed skaters who competed before the most recent Winter Olympics?",
                            "options": [
                                      "They set more records than today's skaters.",
                                      "They only skated on indoor tracks.",
                                      "They did not participate in the Winter Olympics.",
                                      "They had to skate on outdoor tracks with highly variable conditions."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat \"Until the most recent... speed skating events were held outdoors... Conditions on outdoor ice tracks vary\" menyiratkan bahwa atlet terdahulu menghadapi tantangan cuaca luar ruangan yang tidak menentu."
                  },
                  {
                            "id": "l1_49",
                            "number": 49,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "According to the speaker, what happens to ice that contains too many minerals?",
                            "options": [
                                      "It becomes extremely hard and brittle.",
                                      "It forms heavy frost on the surface.",
                                      "It becomes soft and lacks resistance for skates.",
                                      "It melts at $20^{\\circ}$ Fahrenheit."
                            ],
                            "answer": 2,
                            "explanation": "Penutur menjelaskan secara spesifik: \"Minerals in water make ice soft, and soft ice doesn't provide enough resistance\"."
                  },
                  {
                            "id": "l1_50",
                            "number": 50,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What prediction does the speaker make about the near future?",
                            "options": [
                                      "Indoor tracks will be closed.",
                                      "New world records in speed skating will be achieved.",
                                      "Skaters will use metal tracks instead of ice.",
                                      "Speed skating will become a summer olympic event."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat penutup menyatakan optimisme bahwa pemeliharaan es modern akan: \"almost certainly lead to new world records... in the near future\"."
                  }
      ]
      },
      structure: {
        title: "Section 2: Structure & Written Expression",
        instructions: "Carilah kesalahan tata bahasa pada bagian bergaris bawah.",
        questions: [
          {
            id: "s2_1", number: 16, type: "written_expression",
            sentence: "Before a plural count noun like superstitions, much must be replaced by many.",
            sentenceParts: [
              { text: "Before a plural count noun like " },
              { text: "superstitions", underline: true, label: "A" },
              { text: ", the word " },
              { text: "much", underline: true, label: "B" },
              { text: " must be replaced by " },
              { text: "many", underline: true, label: "C" },
              { text: " to be correct in English " },
              { text: "grammar", underline: true, label: "D" },
              { text: "." }
            ],
            answer: "B",
            explanation: "Sebelum kata benda dapat dihitung jamak (superstitions), kita harus menggunakan 'many', bukan 'much'. 'Much' hanya digunakan untuk kata benda tidak dapat dihitung (noncount)."
          },
          {
            id: "s2_2", number: 17, type: "written_expression",
            sentence: "The illumination streets of the city were beautiful during the festive season last night.",
            sentenceParts: [
              { text: "The " },
              { text: "illumination", underline: true, label: "A" },
              { text: " streets of the city " },
              { text: "were", underline: true, label: "B" },
              { text: " beautiful during the " },
              { text: "festive", underline: true, label: "C" },
              { text: " season " },
              { text: "last night", underline: true, label: "D" },
              { text: "." }
            ],
            answer: "A",
            explanation: "Kata partisip 'illuminated' harus digunakan untuk menggantikan kata benda 'illumination' karena berfungsi sebagai kata sifat untuk menerangkan kata benda 'streets'."
          }
        ]
      },
      reading: {
        title: "Section 3: Reading Comprehension",
        instructions: "Bacalah teks di bawah ini dan pilih jawaban terbaik berdasarkan informasi di dalam bacaan.",
        passages: [
          {
            id: "p2_1",
            text: "Clipper ships were constructed in the shipyards of New England and designed for ultimate speed. These vessels took gold seekers from the East Coast to the West Coast during the gold rush. However, to achieve such high speeds, cargo capacity and operating costs were sacrificed. A large, highly-skilled crew was necessary to handle the massive amount of sails.",
            questions: [
              {
                id: "r2_1_1", number: 1,
                question: "What is the primary focus of the passage?",
                options: [
                  "The construction of steamships.",
                  "The history and design of clipper ships.",
                  "The daily life of a sailor.",
                  "The price of gold in California."
                ],
                answer: 1,
                explanation: "Teks di atas berfokus pada struktur, fungsi kecepatan, dan sejarah dari kapal cepat Clipper (clipper ships)."
              }
            ]
          }
        ]
      }
    }
  },
  test3: {
    id: "test3",
    title: "Practice Test 3",
    sections: {
      listening: {
        title: "Section 1: Listening Comprehension",
        instructions: "Pilihlah jawaban terbaik untuk setiap pertanyaan setelah mendengarkan percakapan.",
        questions: [
        {
                            "id": "l1_1",
                            "number": 1,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I can't find those photographs I just had developed."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I think I saw them on the piano."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks the photos are in the developer's shop.",
                                      "She will help the man look for the photos.",
                                      "She believes the photos are on the piano.",
                                      "She doesn't know where the photos are."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyatakan bahwa ia melihat foto-foto tersebut berada di atas piano (\"on the piano\")."
                  },
                  {
                            "id": "l1_2",
                            "number": 2,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Fred sure was angry."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'll say. He left without saying goodbye to anyone."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Fred?"
                                      }
                            ],
                            "question": "What does the man say about Fred?",
                            "options": [
                                      "Fred forgot to say goodbye.",
                                      "Fred was happy to leave early.",
                                      "Fred didn't have time to say goodbye.",
                                      "Fred left in a bad mood without saying goodbye."
                            ],
                            "answer": 3,
                            "explanation": "Pria tersebut menyetujui kemarahan Fred (\"I'll say\") dan menambahkan bahwa Fred pergi begitu saja tanpa mengucapkan selamat tinggal kepada siapa pun."
                  },
                  {
                            "id": "l1_3",
                            "number": 3,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "What an uncomfortable-looking chair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Well, it may look that way - but just try it out!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "The chair is indeed very uncomfortable.",
                                      "She doesn't want the man to sit on it.",
                                      "The chair is actually more comfortable than it looks.",
                                      "She is going to buy a new chair soon."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyarankan pria itu untuk mencobanya terlebih dahulu (\"just try it out\"), menyiratkan bahwa kursi tersebut sebenarnya nyaman meski tampak tidak demikian."
                  },
                  {
                            "id": "l1_4",
                            "number": 4,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "So, where are the rose gardens? Didn't you say they were here on the west side of the park?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "No, no I said they were on the east side."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "The rose gardens are on the east side of the park.",
                                      "She doesn't know where the rose gardens are.",
                                      "The gardens have been moved to another park.",
                                      "She prefers the west side of the park."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut meralat asumsi pria itu dan menegaskan bahwa kebun mawar berada di sebelah timur (\"on the east side\")."
                  },
                  {
                            "id": "l1_5",
                            "number": 5,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "George, is Linda leaving tonight?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think that's what she said."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does George say about Linda?"
                                      }
                            ],
                            "question": "What does George say about Linda?",
                            "options": [
                                      "Linda is staying for another night.",
                                      "He believes Linda is leaving tonight as she mentioned.",
                                      "Linda has already left the building.",
                                      "He is not sure if Linda is leaving at all."
                            ],
                            "answer": 1,
                            "explanation": "George meyakini Linda akan pergi malam ini berdasarkan apa yang pernah Linda katakan (\"I think that's what she said\")."
                  },
                  {
                            "id": "l1_6",
                            "number": 6,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Two weeks' work down the drain!"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, no your experiment wasn't successful?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about the man from this conversation?"
                                      }
                            ],
                            "question": "What is learned about the man from this conversation?",
                            "options": [
                                      "He has been working for only two weeks.",
                                      "His experiment was not successful.",
                                      "He needs to drain the water from his lab.",
                                      "He is going to take a two-week vacation."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan \"down the drain\" adalah idiom yang berarti sia-sia atau terbuang percuma, mengonfirmasi kegagalan eksperimennya."
                  },
                  {
                            "id": "l1_7",
                            "number": 7,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I see Carrie's riding her bike again. Did she fix it herself?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think she got her brother to do it."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man believe about Carrie?"
                                      }
                            ],
                            "question": "What does the man believe about Carrie?",
                            "options": [
                                      "She fixed the bicycle herself.",
                                      "She bought a new bicycle.",
                                      "She doesn't know how to ride a bike.",
                                      "She had her brother repair the bicycle."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"got her brother to do it\" mengindikasikan Carrie meminta saudara laki-lakinya untuk memperbaiki sepeda tersebut."
                  },
                  {
                            "id": "l1_8",
                            "number": 8,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Did the band play for about 2 hours?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No. This time, the concert was over in an hour and a half."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "How long did the concert last?"
                                      }
                            ],
                            "question": "How long did the concert last?",
                            "options": [
                                      "Two hours.",
                                      "Exactly one hour.",
                                      "One and a half hours.",
                                      "More than two hours."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut membantah durasi 2 jam dan menyatakan konser selesai dalam satu setengah jam (\"an hour and a half\")."
                  },
                  {
                            "id": "l1_9",
                            "number": 9,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe you could get a ride to campus with Peggy tomorrow."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Oh, Peggy no longer drives to class."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Peggy?"
                                      }
                            ],
                            "question": "What does the man say about Peggy?",
                            "options": [
                                      "Peggy no longer drives to class.",
                                      "Peggy will give the man a ride tomorrow.",
                                      "Peggy is not going to class tomorrow.",
                                      "Peggy has a new car."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu menjelaskan secara lugas bahwa Peggy sudah tidak mengemudikan kendaraan ke kelas lagi (\"no longer drives to class\")."
                  },
                  {
                            "id": "l1_10",
                            "number": 10,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Swimming is good exercise."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Of course. And so is dancing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks swimming is better than dancing.",
                                      "She doesn't like to swim or dance.",
                                      "Dancing is also good exercise.",
                                      "She wants to go swimming today."
                            ],
                            "answer": 2,
                            "explanation": "Ungkapan \"so is dancing\" memiliki arti persetujuan bahwa menari juga merupakan olahraga yang baik sama seperti berenang."
                  },
                  {
                            "id": "l1_11",
                            "number": 11,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I need to go out. Is it still raining?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Yes, but it's starting to let up a little."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She wants to go out with the man.",
                                      "It is starting to rain less hard.",
                                      "It is raining harder than before.",
                                      "She doesn't want the man to go out."
                            ],
                            "answer": 1,
                            "explanation": "Idiom \"let up\" dalam konteks cuaca hujan berarti mereda atau berkurang intensitasnya."
                  },
                  {
                            "id": "l1_12",
                            "number": 12,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Then you and Robert finished your project on time?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes - no thanks to Robert!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "Robert did most of the work on the project.",
                                      "Robert was not helpful in finishing the project.",
                                      "She is very grateful for Robert's help.",
                                      "They were unable to complete the project on time."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan sinis \"no thanks to Robert\" menunjukkan bahwa proyek selesai bukan karena kontribusi Robert, melainkan karena kerja keras mandiri sang wanita."
                  },
                  {
                            "id": "l1_13",
                            "number": 13,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "I just heard that Professor Hendrix is retiring at the end of the semester."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Too bad - I was hoping to take his chemistry course next semester."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about Professor Hendrix from this conversation?"
                                      }
                            ],
                            "question": "What is learned about Professor Hendrix from this conversation?",
                            "options": [
                                      "He will teach chemistry next semester.",
                                      "He is starting a new course in chemistry.",
                                      "He has decided not to retire after all.",
                                      "He is retiring and will not teach next semester."
                            ],
                            "answer": 3,
                            "explanation": "Frasa \"Professor Hendrix is retiring\" mengonfirmasi bahwa sang profesor pensiun, sehingga ia tidak akan mengajar lagi di semester berikutnya."
                  },
                  {
                            "id": "l1_14",
                            "number": 14,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like some flowers delivered to Hillcrest Hospital."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Certainly. If you step over here, I'll show you some arrangements."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is the man going to do?"
                                      }
                            ],
                            "question": "What is the man going to do?",
                            "options": [
                                      "Choose some flower arrangements.",
                                      "Go to Hillcrest Hospital himself.",
                                      "Deliver flowers to a friend.",
                                      "Plant some flowers in the garden."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut menawarkan untuk menunjukkan rangkaian bunga (\"show you some arrangements\"), yang mengarahkan pria itu untuk memilih dekorasi bunga yang diinginkan."
                  },
                  {
                            "id": "l1_15",
                            "number": 15,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "My watch isn't running."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Why not have the jeweler around the corner fix it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman suggest the man do?"
                                      }
                            ],
                            "question": "What does the woman suggest the man do?",
                            "options": [
                                      "Buy a new watch from the jeweler.",
                                      "Run around the corner to check the time.",
                                      "Fix the watch himself.",
                                      "Have his watch repaired by a jeweler."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"have the jeweler fix it\" menyarankan agar pria tersebut membawa jam tangannya yang mati ke toko perhiasan/jam terdekat untuk diperbaiki."
                  },
                  {
                            "id": "l1_16",
                            "number": 16,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Just think - in another couple of days, I'll be in Montreal."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "How will you get around once you get there?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman ask the man?"
                                      }
                            ],
                            "question": "What does the woman ask the man?",
                            "options": [
                                      "When he is leaving for Montreal.",
                                      "If he has friends in Montreal.",
                                      "How he will travel around Montreal.",
                                      "Why he decided to go to Montreal."
                            ],
                            "answer": 2,
                            "explanation": "Pertanyaan \"How will you get around\" menanyakan sarana transportasi atau metode perjalanan yang akan digunakan pria tersebut saat berada di kota Montreal."
                  },
                  {
                            "id": "l1_17",
                            "number": 17,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I'm exhausted. I can't wait for the weekend to get here."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Need a little rest, do you?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "He agrees that the woman needs some rest.",
                                      "He is also exhausted from work.",
                                      "He cannot wait for the weekend either.",
                                      "He does not think the woman worked hard."
                            ],
                            "answer": 0,
                            "explanation": "Pertanyaan retoris pria itu mengonfirmasi situasi wanita tersebut dan menyetujui bahwa ia memang membutuhkan waktu istirahat."
                  },
                  {
                            "id": "l1_18",
                            "number": 18,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Diane is always saying she loves to go ice-skating."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yes, but when's the last time you actually saw her out on the ice?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man imply about Diane?"
                                      }
                            ],
                            "question": "What does the man imply about Diane?",
                            "options": [
                                      "Diane is a very professional ice-skater.",
                                      "He has seen Diane skating recently.",
                                      "Diane has never gone ice-skating.",
                                      "Diane does not go skating very often."
                            ],
                            "answer": 3,
                            "explanation": "Pertanyaan retoris pria itu \"kapan terakhir kali kamu benar-benar melihatnya di atas es?\" menyiratkan bahwa Diane sebenarnya jarang sekali melakukan olahraga seluncur es meskipun ia mengaku menyukainya."
                  },
                  {
                            "id": "l1_19",
                            "number": 19,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like to return this sweater because it's too small. I don't have the receipt with me, though."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "You could exchange the sweater for another size. But if you don't have the receipt, I won't be able to give you your money back."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He can get his money back if he exchanges the size.",
                                      "He cannot exchange the sweater for another size.",
                                      "He needs to buy a larger size sweater.",
                                      "He cannot get a refund without a receipt."
                            ],
                            "answer": 3,
                            "explanation": "Penjual wanita menegaskan secara jelas bahwa tanpa struk pembelian (\"without the receipt\"), ia tidak dapat memproses pengembalian uang (\"refund\")."
                  },
                  {
                            "id": "l1_20",
                            "number": 20,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Have you ever eaten at the Fisherman's Grotto?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Have I? I never go to the beach without stopping there."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She has never eaten at the Fisherman's Grotto.",
                                      "She does not like eating at the beach.",
                                      "She always eats there when she goes to the beach.",
                                      "The restaurant is too far from the beach."
                            ],
                            "answer": 2,
                            "explanation": "Respons bermakna penekanan ganda \"I never go to the beach without stopping there\" berarti ia selalu menyempatkan diri mampir makan di restoran tersebut setiap pergi ke pantai."
                  },
                  {
                            "id": "l1_21",
                            "number": 21,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Brenda, will you play that song you wrote?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Only if you accompany me on the guitar."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Brenda want the man to do?"
                                      }
                            ],
                            "question": "What does Brenda want the man to do?",
                            "options": [
                                      "Play the guitar while she sings or plays.",
                                      "Write a new song for her.",
                                      "Teach her how to play the guitar.",
                                      "Listen to her song quietly."
                            ],
                            "answer": 0,
                            "explanation": "Brenda bersedia memainkan lagunya hanya jika pria itu mengiringinya menggunakan gitar (\"accompany me on the guitar\")."
                  },
                  {
                            "id": "l1_22",
                            "number": 22,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'm planning to clean up the kitchen this afternoon."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Shouldn't you clean the rest of your apartment while you're at it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He should wait until tomorrow to clean.",
                                      "He should clean the other rooms of the apartment too.",
                                      "The kitchen is already clean enough.",
                                      "She will help him clean the apartment."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat \"Shouldn't you clean the rest of your apartment\" menyarankan agar pria tersebut tidak hanya membersihkan dapur saja, melainkan ruangan lainnya juga."
                  },
                  {
                            "id": "l1_23",
                            "number": 23,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "That was a great play, wasn't it?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yeah, the cast was wonderful. I could hardly believe they weren't professional actors."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "The actors in the play were very unprofessional.",
                                      "The acting was exceptionally good.",
                                      "He wanted to become a professional actor himself.",
                                      "He did not enjoy the theater play."
                            ],
                            "answer": 1,
                            "explanation": "Pujian \"could hardly believe they weren't professional\" menegaskan bahwa kualitas akting para pemeran amat bagus layaknya aktor profesional."
                  },
                  {
                            "id": "l1_24",
                            "number": 24,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "There are only a few drops left in the can. I guess we'll have to buy some in the morning."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, we can finish up this job tomorrow. Let's just wash out our brushes for now."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What will they probably buy in the morning?"
                                      }
                            ],
                            "question": "What will they probably buy in the morning?",
                            "options": [
                                      "New paintbrushes.",
                                      "A new can of water.",
                                      "More paint.",
                                      "Some breakfast food."
                            ],
                            "answer": 2,
                            "explanation": "Berdasarkan petunjuk penggunaan kuas (\"brushes\") dan sisa cairan di dalam kaleng (\"drops left in the can\"), objek yang akan habis dan perlu dibeli esok hari adalah cat tembok."
                  },
                  {
                            "id": "l1_25",
                            "number": 25,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Jim, can I have one of those bananas you bought?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Sorry - they're still not ripe enough."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Jim mean?"
                                      }
                            ],
                            "question": "What does Jim mean?",
                            "options": [
                                      "He wants to save the bananas for tomorrow.",
                                      "The bananas are too expensive to share.",
                                      "The bananas have already gone bad.",
                                      "The bananas are not ready to be eaten yet."
                            ],
                            "answer": 3,
                            "explanation": "Istilah \"not ripe enough\" berarti buah pisang tersebut belum cukup matang untuk dikonsumsi saat ini."
                  },
                  {
                            "id": "l1_26",
                            "number": 26,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "The students in Professor Murray's class think that the test he gave was unfair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "A few of them do, anyway."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What can be inferred from this conversation?"
                                      }
                            ],
                            "question": "What can be inferred from this conversation?",
                            "options": [
                                      "Most of the students did not think the test was unfair.",
                                      "The test was cancelled by Professor Murray.",
                                      "All students failed the exam.",
                                      "Professor Murray is going to change the test grades."
                            ],
                            "answer": 0,
                            "explanation": "Koreksi \"A few of them do, anyway\" mengindikasikan hanya sebagian kecil mahasiswa yang menganggap ujian itu tidak adil, yang berarti mayoritas mahasiswa merasa ujian tersebut adil-adil saja."
                  },
                  {
                            "id": "l1_27",
                            "number": 27,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "John sure knows some good places to eat, doesn't he?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yeah, when it comes to finding great restaurants, John wrote the book."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman say about John?"
                                      }
                            ],
                            "question": "What does the woman say about John?",
                            "options": [
                                      "John has written a cookbook about restaurants.",
                                      "John reads books while eating at restaurants.",
                                      "John is an expert at finding good restaurants.",
                                      "John does not like eating at local restaurants."
                            ],
                            "answer": 2,
                            "explanation": "Idiom \"wrote the book\" pada suatu bidang berarti orang tersebut adalah pakar/ahli yang sangat berpengalaman di bidang tersebut."
                  },
                  {
                            "id": "l1_28",
                            "number": 28,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Look at my face! I got sunburned again yesterday."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe next time you'll remember to wear your hat when you're working in the garden."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman think the man should do?"
                                      }
                            ],
                            "question": "What does the woman think the man should do?",
                            "options": [
                                      "Stop working in the garden entirely.",
                                      "Wear a hat next time he works in the garden.",
                                      "Put some lotion on his sunburned face.",
                                      "Buy a larger hat from the local market."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut menyarankan agar lain kali pria tersebut memakai topi (\"remember to wear your hat\") ketika berkebun untuk menghindari kulit terbakar matahari."
                  },
                  {
                            "id": "l1_29",
                            "number": 29,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Were any of the windows unlocked?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Not one of them."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "Some of the windows were unlocked.",
                                      "He forgot to check the windows.",
                                      "All of the windows were locked.",
                                      "The windows were broken."
                            ],
                            "answer": 2,
                            "explanation": "Jawaban \"Not one of them\" menegaskan bahwa tidak ada satu pun jendela yang tidak terkunci, yang berarti seluruh jendela dalam keadaan terkunci rapat."
                  },
                  {
                            "id": "l1_30",
                            "number": 30,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Harry, what's your new roommate like?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, for one thing, he's very outgoing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Harry say about his roommate?"
                                      }
                            ],
                            "question": "What does Harry say about his roommate?",
                            "options": [
                                      "He is very friendly and sociable.",
                                      "He likes to stay in the room all day.",
                                      "He is looking for another room.",
                                      "He is very quiet and reserved."
                            ],
                            "answer": 0,
                            "explanation": "Karakteristik \"outgoing\" merujuk pada sifat seseorang yang ramah, terbuka, aktif, dan senang bergaul dengan orang lain."
                  },
                  {
                            "id": "l1_31",
                            "number": 31,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "Why was the woman at first confused when the man asked her for directions?",
                            "options": [
                                      "She did not know where Reynolds Hall was.",
                                      "She knew the building only by its informal name (Art Building).",
                                      "She thought Reynolds Hall was a chemistry building.",
                                      "She didn't hear him clearly."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut awalnya bingung karena nama formal gedung itu (Reynolds Hall) jarang digunakan, sementara orang-orang kampus terbiasa menyebutnya dengan nama \"Art Building\"."
                  },
                  {
                            "id": "l1_32",
                            "number": 32,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "According to the woman, what is directly in front of the Art Building?",
                            "options": [
                                      "A chemistry lab.",
                                      "A main library walkway.",
                                      "A service road.",
                                      "A big abstract metal sculpture."
                            ],
                            "answer": 3,
                            "explanation": "Petunjuk arah terakhir menegaskan terdapat patung logam abstrak berukuran besar (\"a big abstract metal sculpture\") tepat berada di depan gedung tersebut."
                  },
                  {
                            "id": "l1_33",
                            "number": 33,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What can be inferred from the conversation about the man's sister?",
                            "options": [
                                      "She is a graduate student.",
                                      "She is an art professor.",
                                      "She does not like paintings.",
                                      "She works at the campus library."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu datang untuk melihat lukisan saudara perempuannya di dalam pameran yang secara eksplisit didefinisikan sebagai pameran lukisan mahasiswa pascasarjana (\"graduate student paintings\")."
                  },
                  {
                            "id": "l1_34",
                            "number": 34,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What is the woman's attitude toward the man?",
                            "options": [
                                      "Indifferent.",
                                      "Impatient.",
                                      "Suspicious.",
                                      "Helpful and friendly."
                            ],
                            "answer": 3,
                            "explanation": "Wanita tersebut secara sabar memandu rute jalan, mengoreksi kesalahpahaman arah pria itu, dan mendoakan agar ia menikmati pamerannya."
                  },
                  {
                            "id": "l1_35",
                            "number": 35,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "What had Professor Carmichael been talking about when Ted asked her a question?",
                            "options": [
                                      "Space exploration budgets.",
                                      "Einstein's theories of relativity and the speed of light.",
                                      "The history of science fiction movies.",
                                      "The construction of modern telescopes."
                            ],
                            "answer": 1,
                            "explanation": "Pembahasan dimulai dengan mengacu pada pemaparan materi profesor mengenai teori Einstein bahwa tidak ada yang dapat melaju melebihi kecepatan cahaya."
                  },
                  {
                            "id": "l1_36",
                            "number": 36,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "If a ship could travel almost as fast as light, how long would it take to get to the closest star?",
                            "options": [
                                      "A few days.",
                                      "Around 186,000 seconds.",
                                      "Four or five years.",
                                      "Thousands of years."
                            ],
                            "answer": 2,
                            "explanation": "Ted menyatakan jika pesawat melaju mendekati kecepatan cahaya, perjalanan menuju bintang terdekat (berjarak sekitar 4 tahun cahaya) akan memakan waktu empat sampai lima tahun (\"four or five years\")."
                  },
                  {
                            "id": "l1_37",
                            "number": 37,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "According to Professor Carmichael, what must be developed before ships can travel to the closest stars?",
                            "options": [
                                      "A completely different method of powering spaceships.",
                                      "Better astronaut training programs.",
                                      "Faster communication systems.",
                                      "Larger fuel tanks for liquid oxygen."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menegaskan bahan bakar konvensional tidak akan cukup untuk ribuan tahun perjalanan, sehingga manusia membutuhkan metode daya penggerak baru (\"completely different method of powering\")."
                  },
                  {
                            "id": "l1_38",
                            "number": 38,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "How does Professor Carmichael characterize travel to other stars?",
                            "options": [
                                      "Unlikely in the foreseeable future.",
                                      "Completely impossible for all time.",
                                      "Already happening in secret military programs.",
                                      "Easy to achieve with current rocket technology."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menyimpulkan bahwa dalam kurun waktu masa depan terdekat, kapal antarbintang hanya akan eksis di film fiksi ilmiah dan buku saja."
                  },
                  {
                            "id": "l1_39",
                            "number": 39,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Whom is the speaker addressing?",
                            "options": [
                                      "Journalism students on a field trip.",
                                      "Local printing press workers.",
                                      "Experienced newspaper deliverers.",
                                      "Tourists visiting the historical monument."
                            ],
                            "answer": null,
                            "explanation": "Audiens adalah para mahasiswa jurnalisme yang melakukan kunjungan lapangan ke kantor redaksi surat kabar."
                  },
                  {
                            "id": "l1_40",
                            "number": 40,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Where will the people listening to this talk go first?",
                            "options": [
                                      "To the Editorial Department.",
                                      "To the Circulation Department.",
                                      "To the Production Department.",
                                      "To the City Desk."
                            ],
                            "answer": 1,
                            "explanation": "Pembawa tur menyebutkan secara jelas bahwa kunjungan pertama dimulai dari Departemen Sirkulasi (\"We'll begin our tour with a visit to the Circulation Department\")."
                  },
                  {
                            "id": "l1_41",
                            "number": 41,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "According to the speaker, what type of work is done at the City Desk?",
                            "options": [
                                      "Distributing newspapers across the state.",
                                      "Gathering and reporting local news.",
                                      "Printing the final pages of the newspaper.",
                                      "Managing international relations."
                            ],
                            "answer": 1,
                            "explanation": "City Desk di dalam Departemen Editorial didefinisikan memiliki tanggung jawab mengumpulkan dan mengabarkan berita-berita lokal (\"gathering and reporting local news\")."
                  },
                  {
                            "id": "l1_42",
                            "number": 42,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What aspect of the \"Semester Afloat\" program does Professor Mackenzie's talk focus on?",
                            "options": [
                                      "The history of the S.S. Apollo.",
                                      "The cost of student tuition fees.",
                                      "Recreational and sports activities on the ship.",
                                      "The academic program and curriculum."
                            ],
                            "answer": 3,
                            "explanation": "Profesor Mackenzie menyatakan di akhir paragraf pertama: \"tonight I want to talk mainly about the academic program\"."
                  },
                  {
                            "id": "l1_43",
                            "number": 43,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What did Professor Mackenzie teach during the \"Semester Afloat\" programs?",
                            "options": [
                                      "Ancient languages of Southeast Asia.",
                                      "Maritime law and navigation.",
                                      "Historical architecture.",
                                      "Modern painting techniques."
                            ],
                            "answer": 2,
                            "explanation": "Profesor menyebutkan spesialisasi pengajarannya: \"I, myself, have taught courses in historical architecture\"."
                  },
                  {
                            "id": "l1_44",
                            "number": 44,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "With which of these \"Semester Afloat\" programs was Professor Mackenzie associated?",
                            "options": [
                                      "The eastern Mediterranean program.",
                                      "The Southeast Asian program.",
                                      "The western Mediterranean program.",
                                      "All three programs equally."
                            ],
                            "answer": 0,
                            "explanation": "Ia menyatakan secara spesifik mengajar \"during two eastern Mediterranean programs\"."
                  },
                  {
                            "id": "l1_45",
                            "number": 45,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What does Professor Mackenzie say about \"Semester Afloat\" classes?",
                            "options": [
                                      "They are exactly the same as classes on campus.",
                                      "They require students to spend all day reading books.",
                                      "They allow students to visit historical sites directly (unlike normal classes).",
                                      "They do not offer any academic credits."
                            ],
                            "answer": 2,
                            "explanation": "Keunikan kelas terapung ini dicontohkan dengan belajar teori kuil Yunani di pagi hari dan langsung mengunjungi kuil fisik aslinya secara langsung di siang harinya."
                  },
                  {
                            "id": "l1_46",
                            "number": 46,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "Whom will Professor Mackenzie introduce to the audience next?",
                            "options": [
                                      "The captain of the S.S. Apollo.",
                                      "The Dean of the School of Architecture.",
                                      "A representative from the Greek government.",
                                      "Two students who took part in the program last semester."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat terakhir menutup dengan pengenalan: \"I want to introduce two students who took part in 'Semester Afloat' last semester\"."
                  },
                  {
                            "id": "l1_47",
                            "number": 47,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What aspect of speed skating does the speaker primarily discuss?",
                            "options": [
                                      "The history of speed skating uniform designs.",
                                      "The improvements and control of track ice conditions.",
                                      "Famous world record holders in speed skating.",
                                      "The rules of refereeing speed skating events."
                            ],
                            "answer": 1,
                            "explanation": "Narasi berpusat pada penjelas es track (ice tracks) baik luar ruangan maupun dalam ruangan serta teknologi penjagaan temperatur dan kemurnian air es."
                  },
                  {
                            "id": "l1_48",
                            "number": 48,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What does the speaker imply about speed skaters who competed before the most recent Winter Olympics?",
                            "options": [
                                      "They set more records than today's skaters.",
                                      "They only skated on indoor tracks.",
                                      "They did not participate in the Winter Olympics.",
                                      "They had to skate on outdoor tracks with highly variable conditions."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat \"Until the most recent... speed skating events were held outdoors... Conditions on outdoor ice tracks vary\" menyiratkan bahwa atlet terdahulu menghadapi tantangan cuaca luar ruangan yang tidak menentu."
                  },
                  {
                            "id": "l1_49",
                            "number": 49,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "According to the speaker, what happens to ice that contains too many minerals?",
                            "options": [
                                      "It becomes extremely hard and brittle.",
                                      "It forms heavy frost on the surface.",
                                      "It becomes soft and lacks resistance for skates.",
                                      "It melts at $20^{\\circ}$ Fahrenheit."
                            ],
                            "answer": 2,
                            "explanation": "Penutur menjelaskan secara spesifik: \"Minerals in water make ice soft, and soft ice doesn't provide enough resistance\"."
                  },
                  {
                            "id": "l1_50",
                            "number": 50,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What prediction does the speaker make about the near future?",
                            "options": [
                                      "Indoor tracks will be closed.",
                                      "New world records in speed skating will be achieved.",
                                      "Skaters will use metal tracks instead of ice.",
                                      "Speed skating will become a summer olympic event."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat penutup menyatakan optimisme bahwa pemeliharaan es modern akan: \"almost certainly lead to new world records... in the near future\"."
                  }
      ]
      },
      structure: {
        title: "Section 2: Structure & Written Expression",
        instructions: "Carilah kesalahan tata bahasa pada kalimat berikut.",
        questions: [
          {
            id: "s3_1", number: 24, type: "written_expression",
            sentence: "Like other warm-blooded animals, blind snakes regulate their temperature with behavior patterns.",
            sentenceParts: [
              { text: "Alike", underline: true, label: "A" },
              { text: " other warm-blooded animals, blind snakes regulate " },
              { text: "their", underline: true, label: "B" },
              { text: " temperature with behavior " },
              { text: "patterns", underline: true, label: "C" },
              { text: " in the wild", underline: true, label: "D" },
              { text: "." }
            ],
            answer: "A",
            explanation: "Kata 'Like' harus digunakan menggantikan 'Alike' pada awal kalimat untuk menyatakan perbandingan ('Like other warm-blooded animals...')."
          },
          {
            id: "s3_2", number: 26, type: "written_expression",
            sentence: "Like other reptiles, blind snakes regulate its internal body temperature with physical behavior patterns.",
            sentenceParts: [
              { text: "Like other reptiles, blind snakes " },
              { text: "regulate", underline: true, label: "A" },
              { text: " " },
              { text: "its", underline: true, label: "B" },
              { text: " internal body temperature with physical " },
              { text: "behavior", underline: true, label: "C" },
              { text: " " },
              { text: "patterns", underline: true, label: "D" },
              { text: "." }
            ],
            answer: "B",
            explanation: "Kata ganti milik jamak 'their' harus digunakan untuk menggantikan kata milik tunggal 'its' karena merujuk pada kata benda jamak 'blind snakes'."
          }
        ]
      },
      reading: {
        title: "Section 3: Reading Comprehension",
        instructions: "Bacalah teks di bawah ini dan pilih jawaban terbaik berdasarkan informasi di dalam bacaan.",
        passages: [
          {
            id: "p3_1",
            text: "Lighthouses are towers with bright lights and foghorns, built to guide mariners safely around dangerous coastlines. In daylight, a lighthouse serves as a prominent landmark. At night, it emits a distinctive pattern of light, known as its characteristic, which allows sailors to identify it and plot their location. In the past, lighthouse keepers spent hours of tedious work maintaining the oil lamps and clockwork mechanisms. Today, almost all lighthouses are fully automated, requiring only occasional maintenance.",
            questions: [
              {
                id: "r3_1_1", number: 1,
                question: "According to the passage, what is a lighthouse's 'characteristic'?",
                options: [
                  "Its height and geographic shape.",
                  "The sound made by its foghorn.",
                  "Its distinctive pattern of light at night.",
                  "The material used to construct its tower."
                ],
                answer: 2,
                explanation: "Teks menyebutkan secara spesifik: 'a distinctive pattern of light, known as its characteristic'."
              }
            ]
          }
        ]
      }
    }
  },
  test4: {
    id: "test4",
    title: "Practice Test 4",
    sections: {
      listening: {
        title: "Section 1: Listening Comprehension",
        instructions: "Pilihlah jawaban terbaik untuk setiap pertanyaan setelah mendengarkan percakapan.",
        questions: [
        {
                            "id": "l1_1",
                            "number": 1,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I can't find those photographs I just had developed."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I think I saw them on the piano."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks the photos are in the developer's shop.",
                                      "She will help the man look for the photos.",
                                      "She believes the photos are on the piano.",
                                      "She doesn't know where the photos are."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyatakan bahwa ia melihat foto-foto tersebut berada di atas piano (\"on the piano\")."
                  },
                  {
                            "id": "l1_2",
                            "number": 2,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Fred sure was angry."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'll say. He left without saying goodbye to anyone."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Fred?"
                                      }
                            ],
                            "question": "What does the man say about Fred?",
                            "options": [
                                      "Fred forgot to say goodbye.",
                                      "Fred was happy to leave early.",
                                      "Fred didn't have time to say goodbye.",
                                      "Fred left in a bad mood without saying goodbye."
                            ],
                            "answer": 3,
                            "explanation": "Pria tersebut menyetujui kemarahan Fred (\"I'll say\") dan menambahkan bahwa Fred pergi begitu saja tanpa mengucapkan selamat tinggal kepada siapa pun."
                  },
                  {
                            "id": "l1_3",
                            "number": 3,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "What an uncomfortable-looking chair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Well, it may look that way - but just try it out!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "The chair is indeed very uncomfortable.",
                                      "She doesn't want the man to sit on it.",
                                      "The chair is actually more comfortable than it looks.",
                                      "She is going to buy a new chair soon."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyarankan pria itu untuk mencobanya terlebih dahulu (\"just try it out\"), menyiratkan bahwa kursi tersebut sebenarnya nyaman meski tampak tidak demikian."
                  },
                  {
                            "id": "l1_4",
                            "number": 4,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "So, where are the rose gardens? Didn't you say they were here on the west side of the park?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "No, no I said they were on the east side."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "The rose gardens are on the east side of the park.",
                                      "She doesn't know where the rose gardens are.",
                                      "The gardens have been moved to another park.",
                                      "She prefers the west side of the park."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut meralat asumsi pria itu dan menegaskan bahwa kebun mawar berada di sebelah timur (\"on the east side\")."
                  },
                  {
                            "id": "l1_5",
                            "number": 5,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "George, is Linda leaving tonight?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think that's what she said."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does George say about Linda?"
                                      }
                            ],
                            "question": "What does George say about Linda?",
                            "options": [
                                      "Linda is staying for another night.",
                                      "He believes Linda is leaving tonight as she mentioned.",
                                      "Linda has already left the building.",
                                      "He is not sure if Linda is leaving at all."
                            ],
                            "answer": 1,
                            "explanation": "George meyakini Linda akan pergi malam ini berdasarkan apa yang pernah Linda katakan (\"I think that's what she said\")."
                  },
                  {
                            "id": "l1_6",
                            "number": 6,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Two weeks' work down the drain!"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, no your experiment wasn't successful?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about the man from this conversation?"
                                      }
                            ],
                            "question": "What is learned about the man from this conversation?",
                            "options": [
                                      "He has been working for only two weeks.",
                                      "His experiment was not successful.",
                                      "He needs to drain the water from his lab.",
                                      "He is going to take a two-week vacation."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan \"down the drain\" adalah idiom yang berarti sia-sia atau terbuang percuma, mengonfirmasi kegagalan eksperimennya."
                  },
                  {
                            "id": "l1_7",
                            "number": 7,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I see Carrie's riding her bike again. Did she fix it herself?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think she got her brother to do it."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man believe about Carrie?"
                                      }
                            ],
                            "question": "What does the man believe about Carrie?",
                            "options": [
                                      "She fixed the bicycle herself.",
                                      "She bought a new bicycle.",
                                      "She doesn't know how to ride a bike.",
                                      "She had her brother repair the bicycle."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"got her brother to do it\" mengindikasikan Carrie meminta saudara laki-lakinya untuk memperbaiki sepeda tersebut."
                  },
                  {
                            "id": "l1_8",
                            "number": 8,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Did the band play for about 2 hours?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No. This time, the concert was over in an hour and a half."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "How long did the concert last?"
                                      }
                            ],
                            "question": "How long did the concert last?",
                            "options": [
                                      "Two hours.",
                                      "Exactly one hour.",
                                      "One and a half hours.",
                                      "More than two hours."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut membantah durasi 2 jam dan menyatakan konser selesai dalam satu setengah jam (\"an hour and a half\")."
                  },
                  {
                            "id": "l1_9",
                            "number": 9,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe you could get a ride to campus with Peggy tomorrow."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Oh, Peggy no longer drives to class."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Peggy?"
                                      }
                            ],
                            "question": "What does the man say about Peggy?",
                            "options": [
                                      "Peggy no longer drives to class.",
                                      "Peggy will give the man a ride tomorrow.",
                                      "Peggy is not going to class tomorrow.",
                                      "Peggy has a new car."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu menjelaskan secara lugas bahwa Peggy sudah tidak mengemudikan kendaraan ke kelas lagi (\"no longer drives to class\")."
                  },
                  {
                            "id": "l1_10",
                            "number": 10,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Swimming is good exercise."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Of course. And so is dancing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks swimming is better than dancing.",
                                      "She doesn't like to swim or dance.",
                                      "Dancing is also good exercise.",
                                      "She wants to go swimming today."
                            ],
                            "answer": 2,
                            "explanation": "Ungkapan \"so is dancing\" memiliki arti persetujuan bahwa menari juga merupakan olahraga yang baik sama seperti berenang."
                  },
                  {
                            "id": "l1_11",
                            "number": 11,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I need to go out. Is it still raining?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Yes, but it's starting to let up a little."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She wants to go out with the man.",
                                      "It is starting to rain less hard.",
                                      "It is raining harder than before.",
                                      "She doesn't want the man to go out."
                            ],
                            "answer": 1,
                            "explanation": "Idiom \"let up\" dalam konteks cuaca hujan berarti mereda atau berkurang intensitasnya."
                  },
                  {
                            "id": "l1_12",
                            "number": 12,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Then you and Robert finished your project on time?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes - no thanks to Robert!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "Robert did most of the work on the project.",
                                      "Robert was not helpful in finishing the project.",
                                      "She is very grateful for Robert's help.",
                                      "They were unable to complete the project on time."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan sinis \"no thanks to Robert\" menunjukkan bahwa proyek selesai bukan karena kontribusi Robert, melainkan karena kerja keras mandiri sang wanita."
                  },
                  {
                            "id": "l1_13",
                            "number": 13,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "I just heard that Professor Hendrix is retiring at the end of the semester."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Too bad - I was hoping to take his chemistry course next semester."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about Professor Hendrix from this conversation?"
                                      }
                            ],
                            "question": "What is learned about Professor Hendrix from this conversation?",
                            "options": [
                                      "He will teach chemistry next semester.",
                                      "He is starting a new course in chemistry.",
                                      "He has decided not to retire after all.",
                                      "He is retiring and will not teach next semester."
                            ],
                            "answer": 3,
                            "explanation": "Frasa \"Professor Hendrix is retiring\" mengonfirmasi bahwa sang profesor pensiun, sehingga ia tidak akan mengajar lagi di semester berikutnya."
                  },
                  {
                            "id": "l1_14",
                            "number": 14,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like some flowers delivered to Hillcrest Hospital."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Certainly. If you step over here, I'll show you some arrangements."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is the man going to do?"
                                      }
                            ],
                            "question": "What is the man going to do?",
                            "options": [
                                      "Choose some flower arrangements.",
                                      "Go to Hillcrest Hospital himself.",
                                      "Deliver flowers to a friend.",
                                      "Plant some flowers in the garden."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut menawarkan untuk menunjukkan rangkaian bunga (\"show you some arrangements\"), yang mengarahkan pria itu untuk memilih dekorasi bunga yang diinginkan."
                  },
                  {
                            "id": "l1_15",
                            "number": 15,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "My watch isn't running."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Why not have the jeweler around the corner fix it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman suggest the man do?"
                                      }
                            ],
                            "question": "What does the woman suggest the man do?",
                            "options": [
                                      "Buy a new watch from the jeweler.",
                                      "Run around the corner to check the time.",
                                      "Fix the watch himself.",
                                      "Have his watch repaired by a jeweler."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"have the jeweler fix it\" menyarankan agar pria tersebut membawa jam tangannya yang mati ke toko perhiasan/jam terdekat untuk diperbaiki."
                  },
                  {
                            "id": "l1_16",
                            "number": 16,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Just think - in another couple of days, I'll be in Montreal."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "How will you get around once you get there?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman ask the man?"
                                      }
                            ],
                            "question": "What does the woman ask the man?",
                            "options": [
                                      "When he is leaving for Montreal.",
                                      "If he has friends in Montreal.",
                                      "How he will travel around Montreal.",
                                      "Why he decided to go to Montreal."
                            ],
                            "answer": 2,
                            "explanation": "Pertanyaan \"How will you get around\" menanyakan sarana transportasi atau metode perjalanan yang akan digunakan pria tersebut saat berada di kota Montreal."
                  },
                  {
                            "id": "l1_17",
                            "number": 17,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I'm exhausted. I can't wait for the weekend to get here."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Need a little rest, do you?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "He agrees that the woman needs some rest.",
                                      "He is also exhausted from work.",
                                      "He cannot wait for the weekend either.",
                                      "He does not think the woman worked hard."
                            ],
                            "answer": 0,
                            "explanation": "Pertanyaan retoris pria itu mengonfirmasi situasi wanita tersebut dan menyetujui bahwa ia memang membutuhkan waktu istirahat."
                  },
                  {
                            "id": "l1_18",
                            "number": 18,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Diane is always saying she loves to go ice-skating."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yes, but when's the last time you actually saw her out on the ice?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man imply about Diane?"
                                      }
                            ],
                            "question": "What does the man imply about Diane?",
                            "options": [
                                      "Diane is a very professional ice-skater.",
                                      "He has seen Diane skating recently.",
                                      "Diane has never gone ice-skating.",
                                      "Diane does not go skating very often."
                            ],
                            "answer": 3,
                            "explanation": "Pertanyaan retoris pria itu \"kapan terakhir kali kamu benar-benar melihatnya di atas es?\" menyiratkan bahwa Diane sebenarnya jarang sekali melakukan olahraga seluncur es meskipun ia mengaku menyukainya."
                  },
                  {
                            "id": "l1_19",
                            "number": 19,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like to return this sweater because it's too small. I don't have the receipt with me, though."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "You could exchange the sweater for another size. But if you don't have the receipt, I won't be able to give you your money back."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He can get his money back if he exchanges the size.",
                                      "He cannot exchange the sweater for another size.",
                                      "He needs to buy a larger size sweater.",
                                      "He cannot get a refund without a receipt."
                            ],
                            "answer": 3,
                            "explanation": "Penjual wanita menegaskan secara jelas bahwa tanpa struk pembelian (\"without the receipt\"), ia tidak dapat memproses pengembalian uang (\"refund\")."
                  },
                  {
                            "id": "l1_20",
                            "number": 20,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Have you ever eaten at the Fisherman's Grotto?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Have I? I never go to the beach without stopping there."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She has never eaten at the Fisherman's Grotto.",
                                      "She does not like eating at the beach.",
                                      "She always eats there when she goes to the beach.",
                                      "The restaurant is too far from the beach."
                            ],
                            "answer": 2,
                            "explanation": "Respons bermakna penekanan ganda \"I never go to the beach without stopping there\" berarti ia selalu menyempatkan diri mampir makan di restoran tersebut setiap pergi ke pantai."
                  },
                  {
                            "id": "l1_21",
                            "number": 21,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Brenda, will you play that song you wrote?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Only if you accompany me on the guitar."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Brenda want the man to do?"
                                      }
                            ],
                            "question": "What does Brenda want the man to do?",
                            "options": [
                                      "Play the guitar while she sings or plays.",
                                      "Write a new song for her.",
                                      "Teach her how to play the guitar.",
                                      "Listen to her song quietly."
                            ],
                            "answer": 0,
                            "explanation": "Brenda bersedia memainkan lagunya hanya jika pria itu mengiringinya menggunakan gitar (\"accompany me on the guitar\")."
                  },
                  {
                            "id": "l1_22",
                            "number": 22,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'm planning to clean up the kitchen this afternoon."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Shouldn't you clean the rest of your apartment while you're at it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He should wait until tomorrow to clean.",
                                      "He should clean the other rooms of the apartment too.",
                                      "The kitchen is already clean enough.",
                                      "She will help him clean the apartment."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat \"Shouldn't you clean the rest of your apartment\" menyarankan agar pria tersebut tidak hanya membersihkan dapur saja, melainkan ruangan lainnya juga."
                  },
                  {
                            "id": "l1_23",
                            "number": 23,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "That was a great play, wasn't it?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yeah, the cast was wonderful. I could hardly believe they weren't professional actors."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "The actors in the play were very unprofessional.",
                                      "The acting was exceptionally good.",
                                      "He wanted to become a professional actor himself.",
                                      "He did not enjoy the theater play."
                            ],
                            "answer": 1,
                            "explanation": "Pujian \"could hardly believe they weren't professional\" menegaskan bahwa kualitas akting para pemeran amat bagus layaknya aktor profesional."
                  },
                  {
                            "id": "l1_24",
                            "number": 24,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "There are only a few drops left in the can. I guess we'll have to buy some in the morning."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, we can finish up this job tomorrow. Let's just wash out our brushes for now."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What will they probably buy in the morning?"
                                      }
                            ],
                            "question": "What will they probably buy in the morning?",
                            "options": [
                                      "New paintbrushes.",
                                      "A new can of water.",
                                      "More paint.",
                                      "Some breakfast food."
                            ],
                            "answer": 2,
                            "explanation": "Berdasarkan petunjuk penggunaan kuas (\"brushes\") dan sisa cairan di dalam kaleng (\"drops left in the can\"), objek yang akan habis dan perlu dibeli esok hari adalah cat tembok."
                  },
                  {
                            "id": "l1_25",
                            "number": 25,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Jim, can I have one of those bananas you bought?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Sorry - they're still not ripe enough."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Jim mean?"
                                      }
                            ],
                            "question": "What does Jim mean?",
                            "options": [
                                      "He wants to save the bananas for tomorrow.",
                                      "The bananas are too expensive to share.",
                                      "The bananas have already gone bad.",
                                      "The bananas are not ready to be eaten yet."
                            ],
                            "answer": 3,
                            "explanation": "Istilah \"not ripe enough\" berarti buah pisang tersebut belum cukup matang untuk dikonsumsi saat ini."
                  },
                  {
                            "id": "l1_26",
                            "number": 26,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "The students in Professor Murray's class think that the test he gave was unfair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "A few of them do, anyway."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What can be inferred from this conversation?"
                                      }
                            ],
                            "question": "What can be inferred from this conversation?",
                            "options": [
                                      "Most of the students did not think the test was unfair.",
                                      "The test was cancelled by Professor Murray.",
                                      "All students failed the exam.",
                                      "Professor Murray is going to change the test grades."
                            ],
                            "answer": 0,
                            "explanation": "Koreksi \"A few of them do, anyway\" mengindikasikan hanya sebagian kecil mahasiswa yang menganggap ujian itu tidak adil, yang berarti mayoritas mahasiswa merasa ujian tersebut adil-adil saja."
                  },
                  {
                            "id": "l1_27",
                            "number": 27,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "John sure knows some good places to eat, doesn't he?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yeah, when it comes to finding great restaurants, John wrote the book."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman say about John?"
                                      }
                            ],
                            "question": "What does the woman say about John?",
                            "options": [
                                      "John has written a cookbook about restaurants.",
                                      "John reads books while eating at restaurants.",
                                      "John is an expert at finding good restaurants.",
                                      "John does not like eating at local restaurants."
                            ],
                            "answer": 2,
                            "explanation": "Idiom \"wrote the book\" pada suatu bidang berarti orang tersebut adalah pakar/ahli yang sangat berpengalaman di bidang tersebut."
                  },
                  {
                            "id": "l1_28",
                            "number": 28,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Look at my face! I got sunburned again yesterday."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe next time you'll remember to wear your hat when you're working in the garden."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman think the man should do?"
                                      }
                            ],
                            "question": "What does the woman think the man should do?",
                            "options": [
                                      "Stop working in the garden entirely.",
                                      "Wear a hat next time he works in the garden.",
                                      "Put some lotion on his sunburned face.",
                                      "Buy a larger hat from the local market."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut menyarankan agar lain kali pria tersebut memakai topi (\"remember to wear your hat\") ketika berkebun untuk menghindari kulit terbakar matahari."
                  },
                  {
                            "id": "l1_29",
                            "number": 29,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Were any of the windows unlocked?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Not one of them."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "Some of the windows were unlocked.",
                                      "He forgot to check the windows.",
                                      "All of the windows were locked.",
                                      "The windows were broken."
                            ],
                            "answer": 2,
                            "explanation": "Jawaban \"Not one of them\" menegaskan bahwa tidak ada satu pun jendela yang tidak terkunci, yang berarti seluruh jendela dalam keadaan terkunci rapat."
                  },
                  {
                            "id": "l1_30",
                            "number": 30,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Harry, what's your new roommate like?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, for one thing, he's very outgoing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Harry say about his roommate?"
                                      }
                            ],
                            "question": "What does Harry say about his roommate?",
                            "options": [
                                      "He is very friendly and sociable.",
                                      "He likes to stay in the room all day.",
                                      "He is looking for another room.",
                                      "He is very quiet and reserved."
                            ],
                            "answer": 0,
                            "explanation": "Karakteristik \"outgoing\" merujuk pada sifat seseorang yang ramah, terbuka, aktif, dan senang bergaul dengan orang lain."
                  },
                  {
                            "id": "l1_31",
                            "number": 31,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "Why was the woman at first confused when the man asked her for directions?",
                            "options": [
                                      "She did not know where Reynolds Hall was.",
                                      "She knew the building only by its informal name (Art Building).",
                                      "She thought Reynolds Hall was a chemistry building.",
                                      "She didn't hear him clearly."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut awalnya bingung karena nama formal gedung itu (Reynolds Hall) jarang digunakan, sementara orang-orang kampus terbiasa menyebutnya dengan nama \"Art Building\"."
                  },
                  {
                            "id": "l1_32",
                            "number": 32,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "According to the woman, what is directly in front of the Art Building?",
                            "options": [
                                      "A chemistry lab.",
                                      "A main library walkway.",
                                      "A service road.",
                                      "A big abstract metal sculpture."
                            ],
                            "answer": 3,
                            "explanation": "Petunjuk arah terakhir menegaskan terdapat patung logam abstrak berukuran besar (\"a big abstract metal sculpture\") tepat berada di depan gedung tersebut."
                  },
                  {
                            "id": "l1_33",
                            "number": 33,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What can be inferred from the conversation about the man's sister?",
                            "options": [
                                      "She is a graduate student.",
                                      "She is an art professor.",
                                      "She does not like paintings.",
                                      "She works at the campus library."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu datang untuk melihat lukisan saudara perempuannya di dalam pameran yang secara eksplisit didefinisikan sebagai pameran lukisan mahasiswa pascasarjana (\"graduate student paintings\")."
                  },
                  {
                            "id": "l1_34",
                            "number": 34,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What is the woman's attitude toward the man?",
                            "options": [
                                      "Indifferent.",
                                      "Impatient.",
                                      "Suspicious.",
                                      "Helpful and friendly."
                            ],
                            "answer": 3,
                            "explanation": "Wanita tersebut secara sabar memandu rute jalan, mengoreksi kesalahpahaman arah pria itu, dan mendoakan agar ia menikmati pamerannya."
                  },
                  {
                            "id": "l1_35",
                            "number": 35,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "What had Professor Carmichael been talking about when Ted asked her a question?",
                            "options": [
                                      "Space exploration budgets.",
                                      "Einstein's theories of relativity and the speed of light.",
                                      "The history of science fiction movies.",
                                      "The construction of modern telescopes."
                            ],
                            "answer": 1,
                            "explanation": "Pembahasan dimulai dengan mengacu pada pemaparan materi profesor mengenai teori Einstein bahwa tidak ada yang dapat melaju melebihi kecepatan cahaya."
                  },
                  {
                            "id": "l1_36",
                            "number": 36,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "If a ship could travel almost as fast as light, how long would it take to get to the closest star?",
                            "options": [
                                      "A few days.",
                                      "Around 186,000 seconds.",
                                      "Four or five years.",
                                      "Thousands of years."
                            ],
                            "answer": 2,
                            "explanation": "Ted menyatakan jika pesawat melaju mendekati kecepatan cahaya, perjalanan menuju bintang terdekat (berjarak sekitar 4 tahun cahaya) akan memakan waktu empat sampai lima tahun (\"four or five years\")."
                  },
                  {
                            "id": "l1_37",
                            "number": 37,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "According to Professor Carmichael, what must be developed before ships can travel to the closest stars?",
                            "options": [
                                      "A completely different method of powering spaceships.",
                                      "Better astronaut training programs.",
                                      "Faster communication systems.",
                                      "Larger fuel tanks for liquid oxygen."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menegaskan bahan bakar konvensional tidak akan cukup untuk ribuan tahun perjalanan, sehingga manusia membutuhkan metode daya penggerak baru (\"completely different method of powering\")."
                  },
                  {
                            "id": "l1_38",
                            "number": 38,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "How does Professor Carmichael characterize travel to other stars?",
                            "options": [
                                      "Unlikely in the foreseeable future.",
                                      "Completely impossible for all time.",
                                      "Already happening in secret military programs.",
                                      "Easy to achieve with current rocket technology."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menyimpulkan bahwa dalam kurun waktu masa depan terdekat, kapal antarbintang hanya akan eksis di film fiksi ilmiah dan buku saja."
                  },
                  {
                            "id": "l1_39",
                            "number": 39,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Whom is the speaker addressing?",
                            "options": [
                                      "Journalism students on a field trip.",
                                      "Local printing press workers.",
                                      "Experienced newspaper deliverers.",
                                      "Tourists visiting the historical monument."
                            ],
                            "answer": null,
                            "explanation": "Audiens adalah para mahasiswa jurnalisme yang melakukan kunjungan lapangan ke kantor redaksi surat kabar."
                  },
                  {
                            "id": "l1_40",
                            "number": 40,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Where will the people listening to this talk go first?",
                            "options": [
                                      "To the Editorial Department.",
                                      "To the Circulation Department.",
                                      "To the Production Department.",
                                      "To the City Desk."
                            ],
                            "answer": 1,
                            "explanation": "Pembawa tur menyebutkan secara jelas bahwa kunjungan pertama dimulai dari Departemen Sirkulasi (\"We'll begin our tour with a visit to the Circulation Department\")."
                  },
                  {
                            "id": "l1_41",
                            "number": 41,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "According to the speaker, what type of work is done at the City Desk?",
                            "options": [
                                      "Distributing newspapers across the state.",
                                      "Gathering and reporting local news.",
                                      "Printing the final pages of the newspaper.",
                                      "Managing international relations."
                            ],
                            "answer": 1,
                            "explanation": "City Desk di dalam Departemen Editorial didefinisikan memiliki tanggung jawab mengumpulkan dan mengabarkan berita-berita lokal (\"gathering and reporting local news\")."
                  },
                  {
                            "id": "l1_42",
                            "number": 42,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What aspect of the \"Semester Afloat\" program does Professor Mackenzie's talk focus on?",
                            "options": [
                                      "The history of the S.S. Apollo.",
                                      "The cost of student tuition fees.",
                                      "Recreational and sports activities on the ship.",
                                      "The academic program and curriculum."
                            ],
                            "answer": 3,
                            "explanation": "Profesor Mackenzie menyatakan di akhir paragraf pertama: \"tonight I want to talk mainly about the academic program\"."
                  },
                  {
                            "id": "l1_43",
                            "number": 43,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What did Professor Mackenzie teach during the \"Semester Afloat\" programs?",
                            "options": [
                                      "Ancient languages of Southeast Asia.",
                                      "Maritime law and navigation.",
                                      "Historical architecture.",
                                      "Modern painting techniques."
                            ],
                            "answer": 2,
                            "explanation": "Profesor menyebutkan spesialisasi pengajarannya: \"I, myself, have taught courses in historical architecture\"."
                  },
                  {
                            "id": "l1_44",
                            "number": 44,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "With which of these \"Semester Afloat\" programs was Professor Mackenzie associated?",
                            "options": [
                                      "The eastern Mediterranean program.",
                                      "The Southeast Asian program.",
                                      "The western Mediterranean program.",
                                      "All three programs equally."
                            ],
                            "answer": 0,
                            "explanation": "Ia menyatakan secara spesifik mengajar \"during two eastern Mediterranean programs\"."
                  },
                  {
                            "id": "l1_45",
                            "number": 45,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What does Professor Mackenzie say about \"Semester Afloat\" classes?",
                            "options": [
                                      "They are exactly the same as classes on campus.",
                                      "They require students to spend all day reading books.",
                                      "They allow students to visit historical sites directly (unlike normal classes).",
                                      "They do not offer any academic credits."
                            ],
                            "answer": 2,
                            "explanation": "Keunikan kelas terapung ini dicontohkan dengan belajar teori kuil Yunani di pagi hari dan langsung mengunjungi kuil fisik aslinya secara langsung di siang harinya."
                  },
                  {
                            "id": "l1_46",
                            "number": 46,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "Whom will Professor Mackenzie introduce to the audience next?",
                            "options": [
                                      "The captain of the S.S. Apollo.",
                                      "The Dean of the School of Architecture.",
                                      "A representative from the Greek government.",
                                      "Two students who took part in the program last semester."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat terakhir menutup dengan pengenalan: \"I want to introduce two students who took part in 'Semester Afloat' last semester\"."
                  },
                  {
                            "id": "l1_47",
                            "number": 47,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What aspect of speed skating does the speaker primarily discuss?",
                            "options": [
                                      "The history of speed skating uniform designs.",
                                      "The improvements and control of track ice conditions.",
                                      "Famous world record holders in speed skating.",
                                      "The rules of refereeing speed skating events."
                            ],
                            "answer": 1,
                            "explanation": "Narasi berpusat pada penjelas es track (ice tracks) baik luar ruangan maupun dalam ruangan serta teknologi penjagaan temperatur dan kemurnian air es."
                  },
                  {
                            "id": "l1_48",
                            "number": 48,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What does the speaker imply about speed skaters who competed before the most recent Winter Olympics?",
                            "options": [
                                      "They set more records than today's skaters.",
                                      "They only skated on indoor tracks.",
                                      "They did not participate in the Winter Olympics.",
                                      "They had to skate on outdoor tracks with highly variable conditions."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat \"Until the most recent... speed skating events were held outdoors... Conditions on outdoor ice tracks vary\" menyiratkan bahwa atlet terdahulu menghadapi tantangan cuaca luar ruangan yang tidak menentu."
                  },
                  {
                            "id": "l1_49",
                            "number": 49,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "According to the speaker, what happens to ice that contains too many minerals?",
                            "options": [
                                      "It becomes extremely hard and brittle.",
                                      "It forms heavy frost on the surface.",
                                      "It becomes soft and lacks resistance for skates.",
                                      "It melts at $20^{\\circ}$ Fahrenheit."
                            ],
                            "answer": 2,
                            "explanation": "Penutur menjelaskan secara spesifik: \"Minerals in water make ice soft, and soft ice doesn't provide enough resistance\"."
                  },
                  {
                            "id": "l1_50",
                            "number": 50,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What prediction does the speaker make about the near future?",
                            "options": [
                                      "Indoor tracks will be closed.",
                                      "New world records in speed skating will be achieved.",
                                      "Skaters will use metal tracks instead of ice.",
                                      "Speed skating will become a summer olympic event."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat penutup menyatakan optimisme bahwa pemeliharaan es modern akan: \"almost certainly lead to new world records... in the near future\"."
                  }
      ]
      },
      structure: {
        title: "Section 2: Structure & Written Expression",
        instructions: "Carilah kesalahan tata bahasa pada kalimat berikut.",
        questions: [
          {
            id: "s4_1", number: 16, type: "written_expression",
            sentence: "Every citizen must understand their rights and responsibilities under the constitution.",
            sentenceParts: [
              { text: "Every citizen must understand " },
              { text: "one's", underline: true, label: "A" },
              { text: " rights " },
              { text: "and", underline: true, label: "B" },
              { text: " responsibilities " },
              { text: "under", underline: true, label: "C" },
              { text: " the " },
              { text: "constitution", underline: true, label: "D" },
              { text: "." }
            ],
            answer: "A",
            explanation: "Kata ganti milik 'its' atau 'his/her' harus digunakan menggantikan 'one's' agar selaras dengan subjek tunggal netral/spesifik."
          },
          {
            id: "s4_2", number: 18, type: "written_expression",
            sentence: "When used before a noun, a number and its measurement is not pluralized, such as a 60-mile drive.",
            sentenceParts: [
              { text: "It was a " },
              { text: "sixty-miles", underline: true, label: "A" },
              { text: " journey " },
              { text: "which", underline: true, label: "B" },
              { text: " took us " },
              { text: "almost", underline: true, label: "C" },
              { text: " three " },
              { text: "hours", underline: true, label: "D" },
              { text: "." }
            ],
            answer: "A",
            explanation: "Ketika kombinasi angka dan ukuran digunakan sebagai kata sifat sebelum kata benda, ukuran tersebut tidak boleh dijamakkan (seharusnya ditulis 'sixty-mile' tanpa huruf -s)."
          }
        ]
      },
      reading: {
        title: "Section 3: Reading Comprehension",
        instructions: "Bacalah teks di bawah ini dan pilih jawaban terbaik berdasarkan informasi di dalam bacaan.",
        passages: [
          {
            id: "p4_1",
            text: "Cooperation is the mutual effort of two or more individuals or groups to achieve a common goal. This behavior is central to social living. In primary cooperation, which is most often characteristic of pre-literate societies, there is a total fusion of individual and group goals. In secondary cooperation, common in modern industrial societies, individuals perform separate tasks to separately enjoy rewards such as salary or prestige.",
            questions: [
              {
                id: "r4_1_1", number: 1,
                question: "What is primary cooperation most characteristic of?",
                options: [
                  "Modern industrial societies.",
                  "Pre-literate societies.",
                  "Small agricultural cooperatives.",
                  "Scientific communities."
                ],
                answer: 1,
                explanation: "Teks menyatakan secara jelas: 'primary cooperation, which is most often characteristic of pre-literate societies'."
              }
            ]
          }
        ]
      }
    }
  },
  test5: {
    id: "test5",
    title: "Practice Test 5",
    sections: {
      listening: {
        title: "Section 1: Listening Comprehension",
        instructions: "Pilihlah jawaban terbaik untuk setiap pertanyaan setelah mendengarkan percakapan.",
        questions: [
        {
                            "id": "l1_1",
                            "number": 1,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I can't find those photographs I just had developed."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I think I saw them on the piano."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks the photos are in the developer's shop.",
                                      "She will help the man look for the photos.",
                                      "She believes the photos are on the piano.",
                                      "She doesn't know where the photos are."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyatakan bahwa ia melihat foto-foto tersebut berada di atas piano (\"on the piano\")."
                  },
                  {
                            "id": "l1_2",
                            "number": 2,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Fred sure was angry."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'll say. He left without saying goodbye to anyone."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Fred?"
                                      }
                            ],
                            "question": "What does the man say about Fred?",
                            "options": [
                                      "Fred forgot to say goodbye.",
                                      "Fred was happy to leave early.",
                                      "Fred didn't have time to say goodbye.",
                                      "Fred left in a bad mood without saying goodbye."
                            ],
                            "answer": 3,
                            "explanation": "Pria tersebut menyetujui kemarahan Fred (\"I'll say\") dan menambahkan bahwa Fred pergi begitu saja tanpa mengucapkan selamat tinggal kepada siapa pun."
                  },
                  {
                            "id": "l1_3",
                            "number": 3,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "What an uncomfortable-looking chair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Well, it may look that way - but just try it out!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "The chair is indeed very uncomfortable.",
                                      "She doesn't want the man to sit on it.",
                                      "The chair is actually more comfortable than it looks.",
                                      "She is going to buy a new chair soon."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut menyarankan pria itu untuk mencobanya terlebih dahulu (\"just try it out\"), menyiratkan bahwa kursi tersebut sebenarnya nyaman meski tampak tidak demikian."
                  },
                  {
                            "id": "l1_4",
                            "number": 4,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "So, where are the rose gardens? Didn't you say they were here on the west side of the park?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "No, no I said they were on the east side."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "The rose gardens are on the east side of the park.",
                                      "She doesn't know where the rose gardens are.",
                                      "The gardens have been moved to another park.",
                                      "She prefers the west side of the park."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut meralat asumsi pria itu dan menegaskan bahwa kebun mawar berada di sebelah timur (\"on the east side\")."
                  },
                  {
                            "id": "l1_5",
                            "number": 5,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "George, is Linda leaving tonight?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think that's what she said."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does George say about Linda?"
                                      }
                            ],
                            "question": "What does George say about Linda?",
                            "options": [
                                      "Linda is staying for another night.",
                                      "He believes Linda is leaving tonight as she mentioned.",
                                      "Linda has already left the building.",
                                      "He is not sure if Linda is leaving at all."
                            ],
                            "answer": 1,
                            "explanation": "George meyakini Linda akan pergi malam ini berdasarkan apa yang pernah Linda katakan (\"I think that's what she said\")."
                  },
                  {
                            "id": "l1_6",
                            "number": 6,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Two weeks' work down the drain!"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, no your experiment wasn't successful?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about the man from this conversation?"
                                      }
                            ],
                            "question": "What is learned about the man from this conversation?",
                            "options": [
                                      "He has been working for only two weeks.",
                                      "His experiment was not successful.",
                                      "He needs to drain the water from his lab.",
                                      "He is going to take a two-week vacation."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan \"down the drain\" adalah idiom yang berarti sia-sia atau terbuang percuma, mengonfirmasi kegagalan eksperimennya."
                  },
                  {
                            "id": "l1_7",
                            "number": 7,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I see Carrie's riding her bike again. Did she fix it herself?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think she got her brother to do it."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man believe about Carrie?"
                                      }
                            ],
                            "question": "What does the man believe about Carrie?",
                            "options": [
                                      "She fixed the bicycle herself.",
                                      "She bought a new bicycle.",
                                      "She doesn't know how to ride a bike.",
                                      "She had her brother repair the bicycle."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"got her brother to do it\" mengindikasikan Carrie meminta saudara laki-lakinya untuk memperbaiki sepeda tersebut."
                  },
                  {
                            "id": "l1_8",
                            "number": 8,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Did the band play for about 2 hours?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No. This time, the concert was over in an hour and a half."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "How long did the concert last?"
                                      }
                            ],
                            "question": "How long did the concert last?",
                            "options": [
                                      "Two hours.",
                                      "Exactly one hour.",
                                      "One and a half hours.",
                                      "More than two hours."
                            ],
                            "answer": 2,
                            "explanation": "Wanita tersebut membantah durasi 2 jam dan menyatakan konser selesai dalam satu setengah jam (\"an hour and a half\")."
                  },
                  {
                            "id": "l1_9",
                            "number": 9,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe you could get a ride to campus with Peggy tomorrow."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Oh, Peggy no longer drives to class."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man say about Peggy?"
                                      }
                            ],
                            "question": "What does the man say about Peggy?",
                            "options": [
                                      "Peggy no longer drives to class.",
                                      "Peggy will give the man a ride tomorrow.",
                                      "Peggy is not going to class tomorrow.",
                                      "Peggy has a new car."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu menjelaskan secara lugas bahwa Peggy sudah tidak mengemudikan kendaraan ke kelas lagi (\"no longer drives to class\")."
                  },
                  {
                            "id": "l1_10",
                            "number": 10,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Swimming is good exercise."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Of course. And so is dancing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She thinks swimming is better than dancing.",
                                      "She doesn't like to swim or dance.",
                                      "Dancing is also good exercise.",
                                      "She wants to go swimming today."
                            ],
                            "answer": 2,
                            "explanation": "Ungkapan \"so is dancing\" memiliki arti persetujuan bahwa menari juga merupakan olahraga yang baik sama seperti berenang."
                  },
                  {
                            "id": "l1_11",
                            "number": 11,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I need to go out. Is it still raining?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Yes, but it's starting to let up a little."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She wants to go out with the man.",
                                      "It is starting to rain less hard.",
                                      "It is raining harder than before.",
                                      "She doesn't want the man to go out."
                            ],
                            "answer": 1,
                            "explanation": "Idiom \"let up\" dalam konteks cuaca hujan berarti mereda atau berkurang intensitasnya."
                  },
                  {
                            "id": "l1_12",
                            "number": 12,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Then you and Robert finished your project on time?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes - no thanks to Robert!"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman imply?"
                                      }
                            ],
                            "question": "What does the woman imply?",
                            "options": [
                                      "Robert did most of the work on the project.",
                                      "Robert was not helpful in finishing the project.",
                                      "She is very grateful for Robert's help.",
                                      "They were unable to complete the project on time."
                            ],
                            "answer": 1,
                            "explanation": "Ungkapan sinis \"no thanks to Robert\" menunjukkan bahwa proyek selesai bukan karena kontribusi Robert, melainkan karena kerja keras mandiri sang wanita."
                  },
                  {
                            "id": "l1_13",
                            "number": 13,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "I just heard that Professor Hendrix is retiring at the end of the semester."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Too bad - I was hoping to take his chemistry course next semester."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is learned about Professor Hendrix from this conversation?"
                                      }
                            ],
                            "question": "What is learned about Professor Hendrix from this conversation?",
                            "options": [
                                      "He will teach chemistry next semester.",
                                      "He is starting a new course in chemistry.",
                                      "He has decided not to retire after all.",
                                      "He is retiring and will not teach next semester."
                            ],
                            "answer": 3,
                            "explanation": "Frasa \"Professor Hendrix is retiring\" mengonfirmasi bahwa sang profesor pensiun, sehingga ia tidak akan mengajar lagi di semester berikutnya."
                  },
                  {
                            "id": "l1_14",
                            "number": 14,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like some flowers delivered to Hillcrest Hospital."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Certainly. If you step over here, I'll show you some arrangements."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What is the man going to do?"
                                      }
                            ],
                            "question": "What is the man going to do?",
                            "options": [
                                      "Choose some flower arrangements.",
                                      "Go to Hillcrest Hospital himself.",
                                      "Deliver flowers to a friend.",
                                      "Plant some flowers in the garden."
                            ],
                            "answer": 0,
                            "explanation": "Wanita tersebut menawarkan untuk menunjukkan rangkaian bunga (\"show you some arrangements\"), yang mengarahkan pria itu untuk memilih dekorasi bunga yang diinginkan."
                  },
                  {
                            "id": "l1_15",
                            "number": 15,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "My watch isn't running."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Why not have the jeweler around the corner fix it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman suggest the man do?"
                                      }
                            ],
                            "question": "What does the woman suggest the man do?",
                            "options": [
                                      "Buy a new watch from the jeweler.",
                                      "Run around the corner to check the time.",
                                      "Fix the watch himself.",
                                      "Have his watch repaired by a jeweler."
                            ],
                            "answer": 3,
                            "explanation": "Pola kausatif \"have the jeweler fix it\" menyarankan agar pria tersebut membawa jam tangannya yang mati ke toko perhiasan/jam terdekat untuk diperbaiki."
                  },
                  {
                            "id": "l1_16",
                            "number": 16,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Just think - in another couple of days, I'll be in Montreal."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "How will you get around once you get there?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman ask the man?"
                                      }
                            ],
                            "question": "What does the woman ask the man?",
                            "options": [
                                      "When he is leaving for Montreal.",
                                      "If he has friends in Montreal.",
                                      "How he will travel around Montreal.",
                                      "Why he decided to go to Montreal."
                            ],
                            "answer": 2,
                            "explanation": "Pertanyaan \"How will you get around\" menanyakan sarana transportasi atau metode perjalanan yang akan digunakan pria tersebut saat berada di kota Montreal."
                  },
                  {
                            "id": "l1_17",
                            "number": 17,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "I'm exhausted. I can't wait for the weekend to get here."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Need a little rest, do you?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "He agrees that the woman needs some rest.",
                                      "He is also exhausted from work.",
                                      "He cannot wait for the weekend either.",
                                      "He does not think the woman worked hard."
                            ],
                            "answer": 0,
                            "explanation": "Pertanyaan retoris pria itu mengonfirmasi situasi wanita tersebut dan menyetujui bahwa ia memang membutuhkan waktu istirahat."
                  },
                  {
                            "id": "l1_18",
                            "number": 18,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Diane is always saying she loves to go ice-skating."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yes, but when's the last time you actually saw her out on the ice?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man imply about Diane?"
                                      }
                            ],
                            "question": "What does the man imply about Diane?",
                            "options": [
                                      "Diane is a very professional ice-skater.",
                                      "He has seen Diane skating recently.",
                                      "Diane has never gone ice-skating.",
                                      "Diane does not go skating very often."
                            ],
                            "answer": 3,
                            "explanation": "Pertanyaan retoris pria itu \"kapan terakhir kali kamu benar-benar melihatnya di atas es?\" menyiratkan bahwa Diane sebenarnya jarang sekali melakukan olahraga seluncur es meskipun ia mengaku menyukainya."
                  },
                  {
                            "id": "l1_19",
                            "number": 19,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'd like to return this sweater because it's too small. I don't have the receipt with me, though."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "You could exchange the sweater for another size. But if you don't have the receipt, I won't be able to give you your money back."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He can get his money back if he exchanges the size.",
                                      "He cannot exchange the sweater for another size.",
                                      "He needs to buy a larger size sweater.",
                                      "He cannot get a refund without a receipt."
                            ],
                            "answer": 3,
                            "explanation": "Penjual wanita menegaskan secara jelas bahwa tanpa struk pembelian (\"without the receipt\"), ia tidak dapat memproses pengembalian uang (\"refund\")."
                  },
                  {
                            "id": "l1_20",
                            "number": 20,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Have you ever eaten at the Fisherman's Grotto?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Have I? I never go to the beach without stopping there."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman mean?"
                                      }
                            ],
                            "question": "What does the woman mean?",
                            "options": [
                                      "She has never eaten at the Fisherman's Grotto.",
                                      "She does not like eating at the beach.",
                                      "She always eats there when she goes to the beach.",
                                      "The restaurant is too far from the beach."
                            ],
                            "answer": 2,
                            "explanation": "Respons bermakna penekanan ganda \"I never go to the beach without stopping there\" berarti ia selalu menyempatkan diri mampir makan di restoran tersebut setiap pergi ke pantai."
                  },
                  {
                            "id": "l1_21",
                            "number": 21,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Brenda, will you play that song you wrote?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Only if you accompany me on the guitar."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Brenda want the man to do?"
                                      }
                            ],
                            "question": "What does Brenda want the man to do?",
                            "options": [
                                      "Play the guitar while she sings or plays.",
                                      "Write a new song for her.",
                                      "Teach her how to play the guitar.",
                                      "Listen to her song quietly."
                            ],
                            "answer": 0,
                            "explanation": "Brenda bersedia memainkan lagunya hanya jika pria itu mengiringinya menggunakan gitar (\"accompany me on the guitar\")."
                  },
                  {
                            "id": "l1_22",
                            "number": 22,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "I'm planning to clean up the kitchen this afternoon."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Shouldn't you clean the rest of your apartment while you're at it?"
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman tell the man?"
                                      }
                            ],
                            "question": "What does the woman tell the man?",
                            "options": [
                                      "He should wait until tomorrow to clean.",
                                      "He should clean the other rooms of the apartment too.",
                                      "The kitchen is already clean enough.",
                                      "She will help him clean the apartment."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat \"Shouldn't you clean the rest of your apartment\" menyarankan agar pria tersebut tidak hanya membersihkan dapur saja, melainkan ruangan lainnya juga."
                  },
                  {
                            "id": "l1_23",
                            "number": 23,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "That was a great play, wasn't it?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Yeah, the cast was wonderful. I could hardly believe they weren't professional actors."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "The actors in the play were very unprofessional.",
                                      "The acting was exceptionally good.",
                                      "He wanted to become a professional actor himself.",
                                      "He did not enjoy the theater play."
                            ],
                            "answer": 1,
                            "explanation": "Pujian \"could hardly believe they weren't professional\" menegaskan bahwa kualitas akting para pemeran amat bagus layaknya aktor profesional."
                  },
                  {
                            "id": "l1_24",
                            "number": 24,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "There are only a few drops left in the can. I guess we'll have to buy some in the morning."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, we can finish up this job tomorrow. Let's just wash out our brushes for now."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What will they probably buy in the morning?"
                                      }
                            ],
                            "question": "What will they probably buy in the morning?",
                            "options": [
                                      "New paintbrushes.",
                                      "A new can of water.",
                                      "More paint.",
                                      "Some breakfast food."
                            ],
                            "answer": 2,
                            "explanation": "Berdasarkan petunjuk penggunaan kuas (\"brushes\") dan sisa cairan di dalam kaleng (\"drops left in the can\"), objek yang akan habis dan perlu dibeli esok hari adalah cat tembok."
                  },
                  {
                            "id": "l1_25",
                            "number": 25,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Jim, can I have one of those bananas you bought?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Sorry - they're still not ripe enough."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Jim mean?"
                                      }
                            ],
                            "question": "What does Jim mean?",
                            "options": [
                                      "He wants to save the bananas for tomorrow.",
                                      "The bananas are too expensive to share.",
                                      "The bananas have already gone bad.",
                                      "The bananas are not ready to be eaten yet."
                            ],
                            "answer": 3,
                            "explanation": "Istilah \"not ripe enough\" berarti buah pisang tersebut belum cukup matang untuk dikonsumsi saat ini."
                  },
                  {
                            "id": "l1_26",
                            "number": 26,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "The students in Professor Murray's class think that the test he gave was unfair."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "A few of them do, anyway."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What can be inferred from this conversation?"
                                      }
                            ],
                            "question": "What can be inferred from this conversation?",
                            "options": [
                                      "Most of the students did not think the test was unfair.",
                                      "The test was cancelled by Professor Murray.",
                                      "All students failed the exam.",
                                      "Professor Murray is going to change the test grades."
                            ],
                            "answer": 0,
                            "explanation": "Koreksi \"A few of them do, anyway\" mengindikasikan hanya sebagian kecil mahasiswa yang menganggap ujian itu tidak adil, yang berarti mayoritas mahasiswa merasa ujian tersebut adil-adil saja."
                  },
                  {
                            "id": "l1_27",
                            "number": 27,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "John sure knows some good places to eat, doesn't he?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yeah, when it comes to finding great restaurants, John wrote the book."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman say about John?"
                                      }
                            ],
                            "question": "What does the woman say about John?",
                            "options": [
                                      "John has written a cookbook about restaurants.",
                                      "John reads books while eating at restaurants.",
                                      "John is an expert at finding good restaurants.",
                                      "John does not like eating at local restaurants."
                            ],
                            "answer": 2,
                            "explanation": "Idiom \"wrote the book\" pada suatu bidang berarti orang tersebut adalah pakar/ahli yang sangat berpengalaman di bidang tersebut."
                  },
                  {
                            "id": "l1_28",
                            "number": 28,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Look at my face! I got sunburned again yesterday."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Maybe next time you'll remember to wear your hat when you're working in the garden."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the woman think the man should do?"
                                      }
                            ],
                            "question": "What does the woman think the man should do?",
                            "options": [
                                      "Stop working in the garden entirely.",
                                      "Wear a hat next time he works in the garden.",
                                      "Put some lotion on his sunburned face.",
                                      "Buy a larger hat from the local market."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut menyarankan agar lain kali pria tersebut memakai topi (\"remember to wear your hat\") ketika berkebun untuk menghindari kulit terbakar matahari."
                  },
                  {
                            "id": "l1_29",
                            "number": 29,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Were any of the windows unlocked?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Not one of them."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does the man mean?"
                                      }
                            ],
                            "question": "What does the man mean?",
                            "options": [
                                      "Some of the windows were unlocked.",
                                      "He forgot to check the windows.",
                                      "All of the windows were locked.",
                                      "The windows were broken."
                            ],
                            "answer": 2,
                            "explanation": "Jawaban \"Not one of them\" menegaskan bahwa tidak ada satu pun jendela yang tidak terkunci, yang berarti seluruh jendela dalam keadaan terkunci rapat."
                  },
                  {
                            "id": "l1_30",
                            "number": 30,
                            "type": "short_dialog",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Harry, what's your new roommate like?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Well, for one thing, he's very outgoing."
                                      },
                                      {
                                                "speaker": "M2 (Narrator)",
                                                "text": "What does Harry say about his roommate?"
                                      }
                            ],
                            "question": "What does Harry say about his roommate?",
                            "options": [
                                      "He is very friendly and sociable.",
                                      "He likes to stay in the room all day.",
                                      "He is looking for another room.",
                                      "He is very quiet and reserved."
                            ],
                            "answer": 0,
                            "explanation": "Karakteristik \"outgoing\" merujuk pada sifat seseorang yang ramah, terbuka, aktif, dan senang bergaul dengan orang lain."
                  },
                  {
                            "id": "l1_31",
                            "number": 31,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "Why was the woman at first confused when the man asked her for directions?",
                            "options": [
                                      "She did not know where Reynolds Hall was.",
                                      "She knew the building only by its informal name (Art Building).",
                                      "She thought Reynolds Hall was a chemistry building.",
                                      "She didn't hear him clearly."
                            ],
                            "answer": 1,
                            "explanation": "Wanita tersebut awalnya bingung karena nama formal gedung itu (Reynolds Hall) jarang digunakan, sementara orang-orang kampus terbiasa menyebutnya dengan nama \"Art Building\"."
                  },
                  {
                            "id": "l1_32",
                            "number": 32,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "According to the woman, what is directly in front of the Art Building?",
                            "options": [
                                      "A chemistry lab.",
                                      "A main library walkway.",
                                      "A service road.",
                                      "A big abstract metal sculpture."
                            ],
                            "answer": 3,
                            "explanation": "Petunjuk arah terakhir menegaskan terdapat patung logam abstrak berukuran besar (\"a big abstract metal sculpture\") tepat berada di depan gedung tersebut."
                  },
                  {
                            "id": "l1_33",
                            "number": 33,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What can be inferred from the conversation about the man's sister?",
                            "options": [
                                      "She is a graduate student.",
                                      "She is an art professor.",
                                      "She does not like paintings.",
                                      "She works at the campus library."
                            ],
                            "answer": 0,
                            "explanation": "Pria itu datang untuk melihat lukisan saudara perempuannya di dalam pameran yang secara eksplisit didefinisikan sebagai pameran lukisan mahasiswa pascasarjana (\"graduate student paintings\")."
                  },
                  {
                            "id": "l1_34",
                            "number": 34,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Excuse me, I'm trying to find my way to Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Reynolds Hall? I don't think I know where that is."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I'm looking for an exhibit of graduate student paintings. The campus newspaper said it was in Reynolds Hall."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Oh, now I know where you mean. Everyone on campus just calls that the Art Building."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So how do I get there?"
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "Go straight ahead until you come to the main library. You'll see a walkway leading off to the left. Go that way, and then past the Chemistry Building..."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Let's see ... to the library, take the walkway to the right ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "No, to the left."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "To the left, and past the Chemistry Building ..."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "That's right, and then you'll cross a little service road. Walk just a little bit farther and there's the Art Building. You can't miss it because there's a big abstract metal sculpture right in front of it."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "I think I've got it."
                                      },
                                      {
                                                "speaker": "F1",
                                                "text": "I hope you enjoy the exhibit. Usually the graduate student exhibits are very interesting, and I've heard this one is especially good."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Actually, the main reason I'm going is that my sister has a couple of paintings in the show. I wanted to take a look at them."
                                      }
                            ],
                            "question": "What is the woman's attitude toward the man?",
                            "options": [
                                      "Indifferent.",
                                      "Impatient.",
                                      "Suspicious.",
                                      "Helpful and friendly."
                            ],
                            "answer": 3,
                            "explanation": "Wanita tersebut secara sabar memandu rute jalan, mengoreksi kesalahpahaman arah pria itu, dan mendoakan agar ia menikmati pamerannya."
                  },
                  {
                            "id": "l1_35",
                            "number": 35,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "What had Professor Carmichael been talking about when Ted asked her a question?",
                            "options": [
                                      "Space exploration budgets.",
                                      "Einstein's theories of relativity and the speed of light.",
                                      "The history of science fiction movies.",
                                      "The construction of modern telescopes."
                            ],
                            "answer": 1,
                            "explanation": "Pembahasan dimulai dengan mengacu pada pemaparan materi profesor mengenai teori Einstein bahwa tidak ada yang dapat melaju melebihi kecepatan cahaya."
                  },
                  {
                            "id": "l1_36",
                            "number": 36,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "If a ship could travel almost as fast as light, how long would it take to get to the closest star?",
                            "options": [
                                      "A few days.",
                                      "Around 186,000 seconds.",
                                      "Four or five years.",
                                      "Thousands of years."
                            ],
                            "answer": 2,
                            "explanation": "Ted menyatakan jika pesawat melaju mendekati kecepatan cahaya, perjalanan menuju bintang terdekat (berjarak sekitar 4 tahun cahaya) akan memakan waktu empat sampai lima tahun (\"four or five years\")."
                  },
                  {
                            "id": "l1_37",
                            "number": 37,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "According to Professor Carmichael, what must be developed before ships can travel to the closest stars?",
                            "options": [
                                      "A completely different method of powering spaceships.",
                                      "Better astronaut training programs.",
                                      "Faster communication systems.",
                                      "Larger fuel tanks for liquid oxygen."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menegaskan bahan bakar konvensional tidak akan cukup untuk ribuan tahun perjalanan, sehingga manusia membutuhkan metode daya penggerak baru (\"completely different method of powering\")."
                  },
                  {
                            "id": "l1_38",
                            "number": 38,
                            "type": "long_conversation",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Professor Carmichael, I'd like to ask a question. You just said that, according to Einstein, nothing can go faster than the speed of light. Is that right?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, Ted, that's what Einstein said, and most scientists agree with him."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Then does that mean that we could never build spaceships to go to other stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, let's think about it. Do you remember how far it is to the nearest star?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Umm... I think you said a few days ago that it's about four light years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "About that. And how fast does light travel?"
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "Around 186,000 miles per second."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Yes, and a light-year is the distance light travels in a YEAR! Imagine that! A light-year is the equivalent of almost 6 trillion miles."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "But what if we built a ship that could go ALMOST as fast as light. Then we could get to the closest star in four or five years."
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "That's true in theory. Unfortunately, there are no spaceships that can even approach the speed of light. Even if we built ships that are MUCH faster than the rockets we have today, it would probably take hundreds or thousands of years to get to the closest stars. How could you carry enough fuel to last that long? We'd need a completely different method of powering spaceships."
                                      },
                                      {
                                                "speaker": "M1",
                                                "text": "So you're saying that you don't think people will ever be able to travel to the stars?"
                                      },
                                      {
                                                "speaker": "F2",
                                                "text": "Well, I don't want to say never, Ted. Who knows what kinds of scientific breakthroughs there will be? But I think for the foreseeable future, there will only be starships in science fiction movies and books."
                                      }
                            ],
                            "question": "How does Professor Carmichael characterize travel to other stars?",
                            "options": [
                                      "Unlikely in the foreseeable future.",
                                      "Completely impossible for all time.",
                                      "Already happening in secret military programs.",
                                      "Easy to achieve with current rocket technology."
                            ],
                            "answer": 0,
                            "explanation": "Profesor menyimpulkan bahwa dalam kurun waktu masa depan terdekat, kapal antarbintang hanya akan eksis di film fiksi ilmiah dan buku saja."
                  },
                  {
                            "id": "l1_39",
                            "number": 39,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Whom is the speaker addressing?",
                            "options": [
                                      "Journalism students on a field trip.",
                                      "Local printing press workers.",
                                      "Experienced newspaper deliverers.",
                                      "Tourists visiting the historical monument."
                            ],
                            "answer": null,
                            "explanation": "Audiens adalah para mahasiswa jurnalisme yang melakukan kunjungan lapangan ke kantor redaksi surat kabar."
                  },
                  {
                            "id": "l1_40",
                            "number": 40,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "Where will the people listening to this talk go first?",
                            "options": [
                                      "To the Editorial Department.",
                                      "To the Circulation Department.",
                                      "To the Production Department.",
                                      "To the City Desk."
                            ],
                            "answer": 1,
                            "explanation": "Pembawa tur menyebutkan secara jelas bahwa kunjungan pertama dimulai dari Departemen Sirkulasi (\"We'll begin our tour with a visit to the Circulation Department\")."
                  },
                  {
                            "id": "l1_41",
                            "number": 41,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F2",
                                                "text": "Good afternoon, ladies and gentlemen, and welcome to the Daily Gazette Building. As I'm sure you're aware from your journalism classes, large newspapers are divided into a number of areas, all of them important to the success of the overall operation. We'll be visiting three important departments today. We'll begin our tour with a visit to the Circulation Department, which is responsible for distributing the paper all over the city. Then we'll move to the Editorial Department. In that department, there's the City Desk, which is responsible for gathering and reporting local news. The National Desk and the International Desk are there, too, and various feature desks. Since you're probably most interested in that part of our operation, we'll be spending most of our time there, and you'll have a chance to chat with some of our reporters. Finally, we'll visit the Production Department, where the newspaper is printed. Please step this way."
                                      }
                            ],
                            "question": "According to the speaker, what type of work is done at the City Desk?",
                            "options": [
                                      "Distributing newspapers across the state.",
                                      "Gathering and reporting local news.",
                                      "Printing the final pages of the newspaper.",
                                      "Managing international relations."
                            ],
                            "answer": 1,
                            "explanation": "City Desk di dalam Departemen Editorial didefinisikan memiliki tanggung jawab mengumpulkan dan mengabarkan berita-berita lokal (\"gathering and reporting local news\")."
                  },
                  {
                            "id": "l1_42",
                            "number": 42,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What aspect of the \"Semester Afloat\" program does Professor Mackenzie's talk focus on?",
                            "options": [
                                      "The history of the S.S. Apollo.",
                                      "The cost of student tuition fees.",
                                      "Recreational and sports activities on the ship.",
                                      "The academic program and curriculum."
                            ],
                            "answer": 3,
                            "explanation": "Profesor Mackenzie menyatakan di akhir paragraf pertama: \"tonight I want to talk mainly about the academic program\"."
                  },
                  {
                            "id": "l1_43",
                            "number": 43,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What did Professor Mackenzie teach during the \"Semester Afloat\" programs?",
                            "options": [
                                      "Ancient languages of Southeast Asia.",
                                      "Maritime law and navigation.",
                                      "Historical architecture.",
                                      "Modern painting techniques."
                            ],
                            "answer": 2,
                            "explanation": "Profesor menyebutkan spesialisasi pengajarannya: \"I, myself, have taught courses in historical architecture\"."
                  },
                  {
                            "id": "l1_44",
                            "number": 44,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "With which of these \"Semester Afloat\" programs was Professor Mackenzie associated?",
                            "options": [
                                      "The eastern Mediterranean program.",
                                      "The Southeast Asian program.",
                                      "The western Mediterranean program.",
                                      "All three programs equally."
                            ],
                            "answer": 0,
                            "explanation": "Ia menyatakan secara spesifik mengajar \"during two eastern Mediterranean programs\"."
                  },
                  {
                            "id": "l1_45",
                            "number": 45,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "What does Professor Mackenzie say about \"Semester Afloat\" classes?",
                            "options": [
                                      "They are exactly the same as classes on campus.",
                                      "They require students to spend all day reading books.",
                                      "They allow students to visit historical sites directly (unlike normal classes).",
                                      "They do not offer any academic credits."
                            ],
                            "answer": 2,
                            "explanation": "Keunikan kelas terapung ini dicontohkan dengan belajar teori kuil Yunani di pagi hari dan langsung mengunjungi kuil fisik aslinya secara langsung di siang harinya."
                  },
                  {
                            "id": "l1_46",
                            "number": 46,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "M1",
                                                "text": "Good evening. For you who don't know me, I'm Professor Mackenzie of the School of Architecture here at Hunt University. I've been involved with \"Semester Afloat\" for some years now, so I've been asked to give this introductory talk about the program. So, what is \"Semester Afloat\"? It's an educational program that is held aboard an ocean-going ship, the S.S. Apollo. There are three programs you can sign up for - one in the eastern Mediterranean, one in the western Mediterranean, and one in Southeast Asia. You'll have the opportunity to see some unforgettable sights. There are many social activities, and you'll make lasting friendships during the semester you spend on the ship, but tonight I want to talk mainly about the academic program. The S.S. Apollo is a floating university. The faculty is recruited from the top universities in North America. There's an excellent library aboard. You'll study the history, language, art, and architecture of the countries that you visit. I, myself, have taught courses in historical architecture during two eastern Mediterranean programs, and I can tell you, those classes are unlike any classes you can take here at Hunt or anywhere else. For example, last semester I gave a lecture about Greek temple design one morning, and that afternoon, I took my class out to see several Greek temples for themselves. Oh, and of course, for all the classes you take, you'll receive academic credit at almost any university in the United States. Now, I have a lot more information about this program for you, but before I go on, I want to introduce two students who took part in \"Semester Afloat\" last semester, and you can ask them any questions you like."
                                      }
                            ],
                            "question": "Whom will Professor Mackenzie introduce to the audience next?",
                            "options": [
                                      "The captain of the S.S. Apollo.",
                                      "The Dean of the School of Architecture.",
                                      "A representative from the Greek government.",
                                      "Two students who took part in the program last semester."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat terakhir menutup dengan pengenalan: \"I want to introduce two students who took part in 'Semester Afloat' last semester\"."
                  },
                  {
                            "id": "l1_47",
                            "number": 47,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What aspect of speed skating does the speaker primarily discuss?",
                            "options": [
                                      "The history of speed skating uniform designs.",
                                      "The improvements and control of track ice conditions.",
                                      "Famous world record holders in speed skating.",
                                      "The rules of refereeing speed skating events."
                            ],
                            "answer": 1,
                            "explanation": "Narasi berpusat pada penjelas es track (ice tracks) baik luar ruangan maupun dalam ruangan serta teknologi penjagaan temperatur dan kemurnian air es."
                  },
                  {
                            "id": "l1_48",
                            "number": 48,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What does the speaker imply about speed skaters who competed before the most recent Winter Olympics?",
                            "options": [
                                      "They set more records than today's skaters.",
                                      "They only skated on indoor tracks.",
                                      "They did not participate in the Winter Olympics.",
                                      "They had to skate on outdoor tracks with highly variable conditions."
                            ],
                            "answer": 3,
                            "explanation": "Kalimat \"Until the most recent... speed skating events were held outdoors... Conditions on outdoor ice tracks vary\" menyiratkan bahwa atlet terdahulu menghadapi tantangan cuaca luar ruangan yang tidak menentu."
                  },
                  {
                            "id": "l1_49",
                            "number": 49,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "According to the speaker, what happens to ice that contains too many minerals?",
                            "options": [
                                      "It becomes extremely hard and brittle.",
                                      "It forms heavy frost on the surface.",
                                      "It becomes soft and lacks resistance for skates.",
                                      "It melts at $20^{\\circ}$ Fahrenheit."
                            ],
                            "answer": 2,
                            "explanation": "Penutur menjelaskan secara spesifik: \"Minerals in water make ice soft, and soft ice doesn't provide enough resistance\"."
                  },
                  {
                            "id": "l1_50",
                            "number": 50,
                            "type": "short_talk",
                            "script": [
                                      {
                                                "speaker": "F1",
                                                "text": "Speed skating has been a Winter Olympic event for many years, but in recent years, conditions on the ice tracks used by speed skaters have gotten better. Until the most recent Winter Olympics, speed skating events were held outdoors. Conditions on outdoor ice tracks vary from hour to hour, depending on the weather. On indoor tracks, conditions can be controlled, giving all skaters an equal opportunity to skate at the top of their form. On indoor tracks, a constant temperature of $20^{\\circ}$ Fahrenheit can be maintained. This is important because if the ice is too cold, it forms frost, slowing down the skaters, and it chips easily. If the temperature is too high, the ice begins to melt. Also, ice tracks today are made with extremely pure water. Minerals in water make ice soft, and soft ice doesn't provide enough resistance for skates. Recent improvements in making and maintaining ice will almost certainly lead to new world records in speed skating in the near future."
                                      }
                            ],
                            "question": "What prediction does the speaker make about the near future?",
                            "options": [
                                      "Indoor tracks will be closed.",
                                      "New world records in speed skating will be achieved.",
                                      "Skaters will use metal tracks instead of ice.",
                                      "Speed skating will become a summer olympic event."
                            ],
                            "answer": 1,
                            "explanation": "Kalimat penutup menyatakan optimisme bahwa pemeliharaan es modern akan: \"almost certainly lead to new world records... in the near future\"."
                  }
      ]
      },
      structure: {
        title: "Section 2: Structure & Written Expression",
        instructions: "Carilah kesalahan tata bahasa pada kalimat berikut.",
        questions: [
          {
            id: "s5_1", number: 16, type: "written_expression",
            sentence: "Organic compounds can be classified as either hydrocarbons and carbon derivatives.",
            sentenceParts: [
              { text: "Organic compounds can " },
              { text: "be classified", underline: true, label: "A" },
              { text: " as " },
              { text: "either", underline: true, label: "B" },
              { text: " hydrocarbons " },
              { text: "and", underline: true, label: "C" },
              { text: " carbon " },
              { text: "derivatives", underline: true, label: "D" },
              { text: "." }
            ],
            answer: "C",
            explanation: "Pasangan korelasi yang tepat untuk kata pembatas 'either' adalah 'or', bukan 'and'. Kalimat ini seharusnya berbunyi 'either hydrocarbons or carbon derivatives'."
          },
          {
            id: "s5_2", number: 17, type: "written_expression",
            sentence: "The other projects were delayed due to lack of funding from sponsors.",
            sentenceParts: [
              { text: "The " },
              { text: "others", underline: true, label: "A" },
              { text: " projects were " },
              { text: "delayed", underline: true, label: "B" },
              { text: " due to " },
              { text: "lack", underline: true, label: "C" },
              { text: " of funding " },
              { text: "from", underline: true, label: "D" },
              { text: " sponsors." }
            ],
            answer: "A",
            explanation: "Kata sifat pembatas 'other' tidak boleh berbentuk jamak ('others') ketika langsung diletakkan sebelum kata benda jamak 'projects'."
          }
        ]
      },
      reading: {
        title: "Section 3: Reading Comprehension",
        instructions: "Bacalah teks di bawah ini dan pilih jawaban terbaik berdasarkan informasi di dalam bacaan.",
        passages: [
          {
            id: "p5_1",
            text: "Sequoyah, a Cherokee silversmith, accomplished one of the most remarkable intellectual achievements in history. In just twelve years, he invented a complete written alphabet for the Cherokee language. He used symbols to represent each of the syllables in the spoken language. The response from his tribe was phenomenal, enabling thousands of Cherokees to become literate in their native tongue in a very short time.",
            questions: [
              {
                id: "r5_1_1", number: 1,
                question: "How long did it take Sequoyah to invent the Cherokee alphabet?",
                options: [
                  "Twelve years.",
                  "A few months.",
                  "Twenty years.",
                  "One year."
                ],
                answer: 0,
                explanation: "Teks menyebutkan secara eksplisit: 'In just twelve years, he invented a complete written alphabet'."
              }
            ]
          }
        ]
      }
    }
  }
};

export { practiceTestData };
