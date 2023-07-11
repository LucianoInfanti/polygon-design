"use client";

import styles from "./page.module.css";
import Link from "next/link";
import TextReveal from "../../_components/TextReveal/TextReveal";
import CurrentDate from "../../_components/CurrentDate/CurrentDate";
import Data from "../../Data/Data.json";
import { useEffect, useState, useRef } from "react";
import Polygons from "../../_components/Polygons/Polygons";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalStore } from "../../GlobalStore";
import { Header } from "@/app/_components/Header/Header";
import { Paragraph } from "@/app/_components/Paragraph/Paragraph";
import { LinkComponent } from "@/app/_components/LinkComponent/LinkComponent";
import Logo from "@/app/_components/Logo/Logo";
import Caption from "@/app/_components/Caption/Caption";
import VideoPlayer from "@/app/_components/VideoPlayer/VideoPlayer";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [counter, setCounter] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const {
    colorGradient,
    clipPath,
    startPercentage,
    endPercentage,
    rotationDegree,
    gradient,
    sideNum,
  } = GlobalStore((state) => state);

  const stateRef = useRef({
    colorGradient,
    clipPath,
    startPercentage,
    endPercentage,
    rotationDegree,
    gradient,
    sideNum,
  });

  useEffect(() => {
    const unsubscribe = GlobalStore.subscribe((state) => state);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    countingIndex();
  }, []);

  const countingIndex = () => {
    let sum = 0;
    for (let i = 0; i < Data.length; i++) {
      sum += Data[i].id;
    }
    setCounter(sum);
  };

  const links = [
    {
      label: "Github",
      href: "https://github.com/LucianoInfanti/polygons-design",
    },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.first_col}>
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
        <div className={styles.date}>
          <CurrentDate />
        </div>
      </div>
      <div className={styles.second_col}>
        <Header />
        <div className={styles.article_wrapper}>
          <Paragraph>
            My goal with this piece is to demonstrate there are more cursors
            than you've been taught before. I hope to get you excited about
            exploring different types of cursors and how they interact with
            users.
          </Paragraph>

          <Paragraph>
            Now, here's something we all tend to forget: the humble cursor.
            Countless times, I've seen cursors become an afterthought in web
            design. When they do show up, it's usually because the engineers
            tossed them in, not because the design team made a plan for them.
            They are commonly forgotten in the design hand-off — and in courses
            as well. We barely mention them, except maybe a quick nod during a
            talk on{" "}
            <LinkComponent
              href={"https://lawsofux.com/fittss-law/ "}
              text={"Fitts' Law"}
            />
            .
          </Paragraph>

          <Paragraph>
            To be fair, this lack of attention makes sense. We don't often think
            about how our app interacts with the larger system it's a part of —
            especially if we are talking about something that is so omnipresent
            it becomes second nature to how human-computer interactions work.
            I've been mentoring students for over a year now and it's
            surprisingly rare to find a student that understands that their
            application does not live in a bubble but rather in a complex
            operating system. It's a learning curve to figure out these patterns
            and understand how to use system interactions and components. It 's
            only natural. That same phenomenon, I believe, happens with the
            cursor.
          </Paragraph>

          <Paragraph>
            Before we dive deeper, let's clear something up. Cursors and
            pointers might seem like the same thing, but they're not. They are
            often used interchangeably but they are not the same. In a digital
            interface, a cursor is an indicator used to show the current
            position for the user interaction. It should be used to inform users
            of the mouse operations that can be performed at the current
            location. That includes: text selection, activating help or context
            menus, copying content, resizing tables, and so on. You can specify
            either the type of cursor using a keyword, or load a specific icon
            to use. So it's not just about looks — it's about telling the user
            what they can and can't do. And that's a usability matter too. Of
            course, that doesn't mean we can't have fun with it and create some
            wow-factor effects.
          </Paragraph>

          <Paragraph>
            We tend to think of cursors as mouse pointers, but they're so much
            more. That blinking text bar when you're typing? That's a cursor.
            Image editing tools' eyedroppers? Cursors. A loading icon? Cursor. A
            highlighted slot in a video game inventory? Also a cursor. You get
            the idea. All of these are cursors but not pointers — so it's safe
            to say that not all cursors are pointers.
          </Paragraph>

          <Paragraph>[img de cursors falados aqui]</Paragraph>

          <Paragraph>
            On the other hand, when we say pointer, we usually mean the mouse
            pointer — the little tilted arrow symbol or sometimes a little hand.
            That's a cursor as well. But the two terms are definitely tangled
            together. Your mouse pointer can become a cursor depending on what
            task you're doing.
          </Paragraph>

          <Paragraph>[seta e maozinha]</Paragraph>

          <Paragraph>
            As designers have become more creative, so too have cursors evolved.
            On the web, it's perfectly okay to use images or emojis as cursors,
            especially for hover effects. This adds a layer of sophistication to
            your product and makes it unique — because, again, most people don't
            give cursors a second thought.
          </Paragraph>

          <Paragraph>
            [img de video de img como cursors no hover] [video do icone]
          </Paragraph>

          <Paragraph>
            Just like cursors follow specific rules on the systems they were
            born in, we can also set our own rules for the web. Take libraries
            like{" "}
            <LinkComponent
              href={"https://www.npmjs.com/package/custom-cursor-react"}
              text={"Custom-React-Cursor"}
            />
            for instance, which let you create personalized cursors that grow in
            size when hovering over a link. It's a step away from the standard
            system behavior, but it still leverages the same principle — a
            visual change to indicate a function.
          </Paragraph>

          <VideoPlayer
         
            width={500}
            fileName={3}
            format={"mov"}
            number={1}
            href={"https://blog.bitsrc.io/create-cursor-animation-in-react-with-framer-motion-deb05adcdc08"}
            text={"Demo from Kyle Le "}
          />

          <Paragraph>
            Things get to a whole new level when we talk about 3D spaces on the
            web. With tools like{" "}
            <LinkComponent href={"https://threejs.org/"} text={"ThreeJS"} />, we
            can create 3D environments in the browser, completely changing how
            the cursor (or should we say pointer?) works. In games, there's
            often no cursor when moving around the 3D environment since the
            camera essentially becomes the cursor. But in those scenarios,
            pointers only appear when you open a specific UI that requires them.
          </Paragraph>

          <Paragraph>[video de 3D ]</Paragraph>

          <Paragraph>
            As (web) designers, we have specific methods for controlling how
            cursors look and behave. This is something I think everyone should
            have some knowledge of. CSS has a cursor property that lets us
            select from specific predetermined cursors. But it doesn't stop
            there — we can also provide fallbacks and use images as cursors.
            Cool, right?
          </Paragraph>

          <Paragraph>
            Check the list below and tell me how many of these you know.
          </Paragraph>

          <div className={styles.cursor_wrapper}>
            <div className={styles.default}>default</div>
            <div className={styles.none}>none</div>
            <div className={styles.context_menu}>context-menu</div>
            <div className={styles.help}>help</div>
            <div className={styles.pointer}>pointer</div>
            <div className={styles.progress}>progress</div>
            <div className={styles.wait}>wait</div>
            <div className={styles.cell}>cell</div>
            <div className={styles.crosshair}>crosshair</div>
            <div className={styles.text}>text</div>
            <div className={styles.vertical_text}>vertical-text</div>
            <div className={styles.alias}>alias</div>
            <div className={styles.copy}>copy</div>
            <div className={styles.move}>move</div>
            <div className={styles.no_drop}>no-drop</div>
            <div className={styles.not_allowed}>not-allowed</div>
            <div className={styles.all_scroll}>all-scroll</div>
            <div className={styles.col_resize}>col-resize</div>
            <div className={styles.row_resize}>row-resize</div>
            <div className={styles.n_resize}>n-resize</div>
            <div className={styles.s_resize}>s-resize</div>
            <div className={styles.e_resize}>e-resize</div>
            <div className={styles.w_resize}>w-resize</div>
            <div className={styles.ns_resize}>ns-resize</div>
            <div className={styles.ew_resize}>ew-resize</div>
            <div className={styles.ne_resize}>ne-resize</div>
            <div className={styles.nw_resize}>nw-resize</div>
            <div className={styles.se_resize}>se-resize</div>
            <div className={styles.sw_resize}>sw-resize</div>
            <div className={styles.nesw_resize}>nesw-resize</div>
            <div className={styles.nwse_resize}>nwse-resize</div>
          </div>

          <Paragraph>
            So, next time you sit down to design, remember the cursor. This
            often overlooked tool is an integral part of the user experience,
            and has the power to make or break the user's interaction with your
            design. Whether it's a standard mouse pointer or a fancy
            personalized cursor, the cursor is a silent communicator. It's a
            subtle guide, a hint giver, and a key player in making digital
            spaces feel more intuitive and user-friendly. So go ahead and
            explore the potential of cursors in your next project.
          </Paragraph>
        </div>
      </div>

      <div className={styles.third_col}>
        <div className={styles.links_wrapper}>
          {links.map((link) => (
            <li className={styles.li_wrapper} key={link.href}>
              <a target="_blank" href={link.href}>
                <TextReveal text={`${link.label}`} />
              </a>
            </li>
          ))}
        </div>
      </div>
    </main>
  );
}
