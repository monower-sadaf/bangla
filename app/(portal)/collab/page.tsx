import Image from "next/image";
import { relative_image_path } from "@/helper";

const Home = (): React.JSX.Element => {
    return (
      <section className="min-h-screen container mx-auto px-2 lg:px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-8 lg:pb-16">
          <Image
            src={relative_image_path("collab1.png")}
            width={1000}
            height={1000}
            alt="Bangla"
          />
          <p className="text-justify text-12 lg:text-18">
            ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং (NLP) হল কৃত্রিম বুদ্ধিমত্তার (AI)
            একটি জনপ্রিয় শাখা । বর্তমানে বিশ্ববাজারে এনএলপিতে দক্ষ জনশক্তির
            ব্যাপক চাহিদা রয়েছে। সেই কারণে, বিশ্বব্যাপী বিপুল সংখ্যক
            শিক্ষার্থীর জন্য NLP প্রধান আকর্ষণ। সেই আগ্রহকে কেন্দ্র করেই আয়োজন
            করা হয়েছে এনএলপি হ্যাকাথন। সারা বাংলাদেশের বিভিন্ন বিশ্ববিদ্যালয়ের
            শিক্ষার্থীরা এই হ্যাকাথনে অংশ নিচ্ছে। <br /> <br /> গবেষণা ও
            উন্নয়নের মাধ্যমে তথ্য প্রযুক্তিতে বাংলা ভাষা সমৃদ্ধকরণ প্রকল্প এবং
            বাংলাদেশ ওপেন সোর্স নেটওয়ার্কের (বিডিওএসএন) যৌথ আয়োজনে অনুষ্ঠিত হবে
            এই এনএলপি হ্যাকাথন।। সহযোগিতা করছে তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
            (আইসিটি বিভাগ), বাংলাদেশ কম্পিউটার কাউন্সিল (বিসিসি) এবং এডব্লিউএস ।
            আয়োজনের গোল্ড স্পন্সর হিসেবে ব্রেইন ষ্টেশন, সিলভার স্পন্সর হিসেবে
            ইজি সেবা এবং ইন্টারনেট পার্টনার হিসেবে আছেন লিংক থ্রী।
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <p className="order-2 lg:order-1 text-justify text-12 lg:text-18">
            Bengali is the fifth most spoken of all native languages all over
            the world. But so far very little work has been done on Bengali
            Speech Transcription. Considering the large audience and
            far-reaching opportunities, there’s significant business and
            educational interest in developing AI that can be used in Bengali
            ASR (Automatic Speech Recognition) We, at the Department of Computer
            Science and Engineering, BUET in partnership with Bengali AI, are
            glad to present the very first Bengali ASR competition of its kind,
            , as a part of BUET CSE Fest 2022.  For training the model, we will
            be using a crowdsourced sentence-level automatic speech recognition
            corpus collected on the Mozilla Common Voice platform. The details
            of the dataset can be found here: https://arxiv.org/abs/2206.14053.
              This competition is open for all, not only for undergraduates.
            Anyone from any institution can participate.  Competition Website
             Important information and FAQ on the competition can be found here:
            https://buetcsefest2022.com/dlsprint/. You can even join this
            facebook group for relevant updates:
            https://www.facebook.com/groups/1185590455630397. Registration link:
            https://tiny.cc/dlsprint22. Registration is mandatory to participate
            in Phase 1 Part 2 and Phase 2 rounds.   Competition Schedule  Phase
            1 Part 1: Will be held in Kaggle from July 1st to August 25th (12:00
            AM GMT+6). Participants are expected to build and train their model
            during this phase. Phase 1 Part 2: Will be held in Kaggle on August
            25th. Only registered teams will be allowed. Participants will infer
            their model on a new dataset. The top 15 teams from this round will
            be selected for Phase 2. Phase 2: Will be held onsite at the
            Department of CSE, BUET, on September 2nd. Only invited participants
            can participate. Participants will infer their model on a new
            dataset and present their methods live in front of the judges’
            panel.   Important  All teams will submit working Kaggle notebooks
            for Train and Test with appropriate instructions and documentations
            for reproducibility after Phase 1 Part 1.  Acknowledgements  EBLICT
            Project, BCC, ICT Division, Bangladesh and IEEE Computer Society
            BUET Student Branch Chapter are jointly hosting the event with the
            organizers. The event is also supported by Incepta Solutions
            Limited.
          </p>
          <Image
            src={relative_image_path("collab2.png")}
            className="order-1 lg:order-2"
            width={1000}
            height={1000}
            alt="Bangla"
          />
        </div>
      </section>
    );
};

export default Home;