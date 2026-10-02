"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";

import ScrollReveal from "./scroll-reveal";

import MusicNoteRounded from "@mui/icons-material/MusicNoteRounded";
import VolumeOffRounded from "@mui/icons-material/VolumeOffRounded";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRounded from "@mui/icons-material/KeyboardArrowUpRounded";

import { Great_Vibes, Cormorant_Garamond } from "next/font/google";

const scriptFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const serifFont = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const scriptFamily = `${scriptFont.style.fontFamily}, cursive`;
const serifFamily = `${serifFont.style.fontFamily}, serif`;

const goldText = {
  background:
    "linear-gradient(135deg, #8f6427 0%, #d4a94f 45%, #b98a35 60%, #8f6427 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
  px: 2,
  py: 1,
} as const;

const mapLink =
  "https://www.google.com/maps?sca_esv=02d34b3997bbecc5&rlz=1C1VDKB_enPH1053PH1053&biw=1920&bih=911&output=search&q=the+home+of+authentic+laing+2+brick+road&source=lnms&fbs=ABfTbFUxGEP8yeZbmk97ajdTjIq-1SYeWocr-JQ01ak8-2VFVc-G1_pZrygIAtw89UfRnn1bAVjyn9ttUnU9Fr7LbpM2SvYRD9vNr27QNHDDDgSZTH3kK8O44OqCQzq1Z-8CrSOApzBs-tdJU-McWKi3XNtuuxtsYwEK_TbYz0V0nGKBM74e88oMtzUyyTtaL7A9KCAOLl9k0thvHWlTuf33t-Vp21gFT9e-sC-KBYxaxUDFapwrNYs&entry=mc&ved=1t:200715&ictx=111";

const eventDetails = [
  {
    label: "Venue",
    value: "The Home of Authentic Laing - Cainta",
  },
  {
    label: "Date",
    value: "December 5, 2026",
  },
  {
    label: "Time",
    value: "Starts at 09:45 AM",
  },
];

const reminders = [
  "Kindly arrive on time.",
  "Please bring your invitation as it will be your entry pass.",
  "We kindly request no plus-ones unless stated on the invitation.",
  "We kindly ask our guests to refrain from using mobile phones during the ceremony so everyone can be fully present and enjoy this special moment with us. 🤍",
  "Most importantly, come ready to celebrate, laugh, and make beautiful memories with us! 🤍",
];

const storyParagraphs = [
  "Our story began in high school, when we were simply classmates who happened to find something special in each other. Somewhere between shared moments, laughter, and countless conversations, a friendship slowly became love.",
  "What started as young love grew into something much bigger than we could have imagined.",
  "For 10 years, we've grown together through different seasons of life — learning, changing, dreaming, and making memories along the way. We've celebrated the good days, held on through the difficult ones, and continued choosing each other through it all.",
  "And now, after a decade of growing side by side, we're finally taking the next step.",
  "From classmates, to lovers, to partners in life — our high school love story is becoming our forever.",
  "10 years down. Forever to go. 🤍",
  "Today, we are grateful to begin a new chapter together — surrounded by the family and friends who have been part of our story.",
];

const timeline = [
  {
    time: "09:45 AM",
    title: "Guest Arrival",
    description:
      "Please arrive a little early and get comfortable before the ceremony begins.",
  },
  {
    time: "10:00 AM",
    title: "Wedding Ceremony",
    description:
      "Join us as we exchange our vows and begin this new chapter together.",
  },
  {
    time: "11:00 AM",
    title: "Photos & Celebration",
    description:
      "A little time for photographs, greetings, and celebrating with family and friends.",
  },
  {
    time: "12:00 PM",
    title: "Reception",
    description:
      "Let's gather around, enjoy good food, and celebrate together.",
  },
];

const entourageGroups = [
  {
    title: "Parents of the Groom",
    names: ["Dennis D. Concepcion", "Aleli Jane D. Concepcion"],
  },
  {
    title: "Parents of the Bride",
    names: ["Bonifacio P. Briones", "Nilda J. Briones"],
  },
  {
    title: "Best Men and Brothers of the Groom",
    names: ["Denzel Anjelo D. Concepcion", "Denyel Ajlie D. Concepcion"],
  },
  {
    title: "Maid of Honor of the Bride",
    names: ["Joanna Kitamura"],
  },
  {
    title: "Groomsmen",
    names: [
      "Armando Layag",
      "Bernard Briones",
      "Bryan Briones",
      "Hikaru Kitamura",
      "Jethro De Jesus",
    ],
  },
  {
    title: "Bridesmaids",
    names: [
      "Nerizza Juanerio",
      "Mary Rose Morales",
      "Samantha Layag",
      "Daisyrie Aranas",
      "Rachel Dominguez",
    ],
  },
  {
    title: "Ring Bearer",
    names: ["Adam Marcus A. Layag"],
  },
  {
    title: "Principal Sponsors",
    names: [
      "Dexter Concepcion",
      "Rowena Leanda",
      "Albert Dominguez",
      "Janet Padolina",
      "Nicanor Juanerio",
      "Bibiana Juanerio",
      "Ermelyn Faustino",
      "Rjon Adra",
      "Geidy Esperanza",
      "Reina Veronica Obeja",
      "Mae Edilyn Penson",
      "Elmer Conducto",
      "Rolando Saldivar",
      "Marlyn Bolante",
      "Bryan Concepcion",
      "Rodrigo Repalda",
      "Vanessa Repalda",
      "Romeo R. Ademis Jr",
      "Irene O. Ademis",
      "Rodelio Urgel",
      "Glendeliza Urgel",
      "Joel Calleja Peñaflor",
      "Maricel Bantal Peñaflor",
      "Alvin Alo",
      "Elizabeth Alo",
    ],
  },
];

function Countdown() {
  const weddingDate = new Date("2026-12-05T09:45:00+08:00").getTime();

  const calculateTimeLeft = () => {
    const difference = weddingDate - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  const isWeddingDay =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <ScrollReveal>
      <Box component="section" sx={{ pb: { xs: 5, md: 7 } }}>
        <Paper
          elevation={0}
          sx={{
            bgcolor: "rgba(255,253,247,0.9)",
            background:
              "linear-gradient(150deg, rgba(255,253,247,0.98), rgba(247,230,181,0.62))",
            border: "1px solid rgba(185,138,53,0.34)",
            p: { xs: 3, sm: 5, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography
            component="p"
            sx={{
              color: "primary.main",
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: 2,
              mb: 1.5,
              textTransform: "uppercase",
            }}
          >
            The Countdown
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: "secondary.main",
              fontSize: { xs: "2.4rem", md: "4rem" },
              lineHeight: 1,
              mb: 1.5,
            }}
          >
            {isWeddingDay ? "Today We Say “I Do”" : "Until We Say “I Do”"}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontFamily: "'Trebuchet MS', sans-serif",
              mb: 4,
            }}
          >
            December 5, 2026
          </Typography>

          {!isWeddingDay ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: { xs: 1, sm: 2 },
                maxWidth: 700,
                mx: "auto",
              }}
            >
              {items.map((item) => (
                <Box key={item.label}>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontSize: {
                        xs: "2rem",
                        sm: "3rem",
                        md: "4rem",
                      },
                      fontWeight: 500,
                      lineHeight: 1,
                    }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontFamily: "'Trebuchet MS', sans-serif",
                      fontSize: {
                        xs: "0.65rem",
                        sm: "0.8rem",
                      },
                      letterSpacing: 1.2,
                      mt: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Typography
              sx={{
                color: "primary.main",
                fontFamily: "'Trebuchet MS', sans-serif",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
              }}
            >
              Our special day has finally arrived. 🤍
            </Typography>
          )}

          <Box
            sx={{
              width: 70,
              height: 1,
              bgcolor: "primary.main",
              opacity: 0.5,
              mx: "auto",
              mt: 4,
            }}
          />
        </Paper>
      </Box>
    </ScrollReveal>
  );
}

function MusicToggle({
  isPlaying,
  onToggle,
}: {
  isPlaying: boolean;
  onToggle: () => void;
}) {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowHint(false);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      setShowHint(false);
    }
  }, [isPlaying]);

  return (
    <>
      {showHint && !isPlaying && (
        <Box
          sx={{
            position: "fixed",
            right: { xs: 78, sm: 88 },
            bottom: { xs: 22, sm: 30 },
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 1.8,
            py: 0.9,
            borderRadius: 999,
            bgcolor: "rgba(255,253,247,0.96)",
            border: "1px solid rgba(185,138,53,0.38)",
            boxShadow: "0 8px 24px rgba(84,55,21,0.14)",
            backdropFilter: "blur(10px)",
            animation:
              "musicHintIn 0.6s ease-out, musicHintPulse 2s ease-in-out infinite 0.8s",
            pointerEvents: "none",
            whiteSpace: "nowrap",

            "&::after": {
              content: '""',
              position: "absolute",
              right: -6,
              top: "50%",
              width: 10,
              height: 10,
              bgcolor: "rgba(255,253,247,0.96)",
              borderTop: "1px solid rgba(185,138,53,0.38)",
              borderRight: "1px solid rgba(185,138,53,0.38)",
              transform: "translateY(-50%) rotate(45deg)",
            },

            "@keyframes musicHintIn": {
              from: {
                opacity: 0,
                transform: "translateX(10px)",
              },
              to: {
                opacity: 1,
                transform: "translateX(0)",
              },
            },

            "@keyframes musicHintPulse": {
              "0%, 100%": {
                transform: "translateX(0)",
              },
              "50%": {
                transform: "translateX(-3px)",
              },
            },
          }}
        >
          <MusicNoteRounded
            sx={{
              fontSize: 17,
              color: "primary.main",
            }}
          />

          <Typography
            sx={{
              color: "text.primary",
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: 0.5,
              fontWeight: 600,
            }}
          >
            Tap for music
          </Typography>
        </Box>
      )}

      <IconButton
        onClick={onToggle}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
        sx={{
          position: "fixed",
          right: { xs: 16, sm: 24 },
          bottom: { xs: 16, sm: 24 },
          width: 52,
          height: 52,
          zIndex: 1000,
          bgcolor: "rgba(255,253,247,0.94)",
          border: "1px solid rgba(185,138,53,0.45)",
          color: "primary.main",
          boxShadow: "0 8px 25px rgba(84,55,21,0.15)",
          backdropFilter: "blur(10px)",
          animation: !isPlaying
            ? "musicButtonPulse 2.2s ease-in-out infinite"
            : "none",

          "@keyframes musicButtonPulse": {
            "0%, 100%": {
              boxShadow: "0 8px 25px rgba(84,55,21,0.15)",
            },
            "50%": {
              boxShadow:
                "0 8px 25px rgba(185,138,53,0.32), 0 0 0 5px rgba(185,138,53,0.08)",
            },
          },

          "&:hover": {
            bgcolor: "rgba(247,230,181,0.95)",
            transform: "scale(1.05)",
          },

          transition: "all 0.2s ease",
        }}
      >
        {isPlaying ? <MusicNoteRounded /> : <VolumeOffRounded />}
      </IconButton>
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      aria-label="Back to top"
      sx={{
        position: "fixed",
        left: { xs: 16, sm: 24 },
        bottom: { xs: 16, sm: 24 },
        width: 46,
        height: 46,
        zIndex: 999,
        bgcolor: "rgba(255,253,247,0.94)",
        border: "1px solid rgba(185,138,53,0.38)",
        color: "primary.main",
        boxShadow: "0 8px 25px rgba(84,55,21,0.13)",
        backdropFilter: "blur(10px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "all 0.3s ease",

        "&:hover": {
          bgcolor: "rgba(247,230,181,0.95)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <KeyboardArrowUpRounded />
    </IconButton>
  );
}

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const startInvitation = () => {
    if (isOpening) return;

    setIsOpening(true);

    const audio = document.getElementById(
      "wedding-audio",
    ) as HTMLAudioElement | null;

    if (audio) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    window.setTimeout(() => setIsLeaving(true), 2400);
    window.setTimeout(() => setIsOpened(true), 3100);
  };

  const toggleMusic = () => {
    const audio = document.getElementById(
      "wedding-audio",
    ) as HTMLAudioElement | null;

    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const scrollToDetails = () => {
    document.getElementById("details")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box className="invitation-shell" component="main">
      <audio id="wedding-audio" loop preload="auto">
        <source src="/wedding-song.mp3" type="audio/mpeg" />
      </audio>

      {/* ENVELOPE OPENING SCREEN */}
      {!isOpened && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 3,
            background:
              "radial-gradient(circle at center, rgba(255,253,247,0.98), rgba(239,220,177,0.98))",
            opacity: isLeaving ? 0 : 1,
            transition: "opacity 0.7s ease",
            pointerEvents: isLeaving ? "none" : "auto",

            "@keyframes envFloat": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-8px)" },
            },

            "@keyframes sealPulse": {
              "0%, 100%": {
                boxShadow: "0 6px 16px rgba(84,55,21,0.35)",
              },
              "50%": {
                boxShadow:
                  "0 6px 16px rgba(84,55,21,0.35), 0 0 0 8px rgba(185,138,53,0.18)",
              },
            },
          }}
        >
          <Stack alignItems="center" spacing={{ xs: 4, sm: 5 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  color: "primary.main",
                  fontFamily: serifFamily,
                  fontSize: { xs: "0.8rem", sm: "0.95rem" },
                  letterSpacing: { xs: 4, sm: 6 },
                  textTransform: "uppercase",
                  opacity: isOpening ? 0 : 1,
                  transition: "opacity 0.5s ease",
                }}
              >
                A Special Invitation
              </Typography>
            </Box>

            {/* ENVELOPE */}
            <Box
              onClick={startInvitation}
              role="button"
              aria-label="Open invitation"
              sx={{
                position: "relative",
                width: { xs: 300, sm: 420 },
                height: { xs: 200, sm: 280 },
                mt: { xs: 12, sm: 17 },
                cursor: isOpening ? "default" : "pointer",
                perspective: "1200px",
                animation: isOpening
                  ? "none"
                  : "envFloat 3.5s ease-in-out infinite",
                transform: isLeaving ? "scale(1.12)" : "scale(1)",
                transition: "transform 0.7s ease",
              }}
            >
              {/* Back of envelope */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  background: "linear-gradient(145deg, #d9b568, #c49a47)",
                  border: "1px solid rgba(143,100,39,0.45)",
                  boxShadow: "0 30px 70px rgba(84,55,21,0.28)",
                }}
              />

              {/* Letter inside */}
              <Box
                sx={{
                  position: "absolute",
                  left: "6%",
                  right: "6%",
                  top: "8%",
                  height: "86%",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "linear-gradient(160deg, #fffdf7, #f7e6b5)",
                  border: "1px solid rgba(185,138,53,0.45)",
                  boxShadow: "0 8px 24px rgba(84,55,21,0.18)",
                  transform: isOpening ? "translateY(-62%)" : "translateY(0)",
                  transition:
                    "transform 1.1s cubic-bezier(0.22, 0.8, 0.3, 1) 0.8s",
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontFamily: serifFamily,
                    fontSize: { xs: "0.65rem", sm: "0.75rem" },
                    letterSpacing: 4,
                    textTransform: "uppercase",
                  }}
                >
                  You are invited
                </Typography>

                <Typography
                  sx={{
                    ...goldText,
                    fontFamily: scriptFamily,
                    fontSize: { xs: "2rem", sm: "2.8rem" },
                    lineHeight: 1.3,
                  }}
                >
                  Dennison & Bernadette
                </Typography>

                <Typography
                  sx={{
                    color: "primary.main",
                    fontFamily: serifFamily,
                    fontStyle: "italic",
                    fontSize: { xs: "0.9rem", sm: "1.05rem" },
                  }}
                >
                  December 5, 2026
                </Typography>

                {/* Tiny Pluto detail */}
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "0.65rem", sm: "0.75rem" },
                    mt: 1,
                    opacity: 0.7,
                  }}
                >
                  🐾
                </Typography>
              </Box>

              {/* Front pocket */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 3,
                  clipPath: "polygon(0 0, 50% 54%, 100% 0, 100% 100%, 0 100%)",
                  background:
                    "linear-gradient(145deg, #f3dfae 0%, #e2c27a 50%, #cfa653 100%)",
                }}
              />

              {/* Fold lines */}
              <Box
                component="svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              >
                <path
                  d="M0 0 L50 54 L100 0 M0 100 L50 54 L100 100"
                  fill="none"
                  stroke="rgba(143,100,39,0.45)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              </Box>

              {/* Top flap */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "54%",
                  zIndex: isOpening ? 1 : 4,
                  transformOrigin: "top center",
                  transform: isOpening ? "rotateX(180deg)" : "rotateX(0deg)",
                  transition:
                    "transform 0.9s ease 0.2s, z-index 0s linear 0.65s",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background:
                    "linear-gradient(180deg, #ecd08f 0%, #dcb96c 100%)",
                }}
              />

              {/* Wax seal */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "54%",
                  width: { xs: 58, sm: 72 },
                  height: { xs: 58, sm: 72 },
                  zIndex: 5,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "radial-gradient(circle at 35% 30%, #f6e2a6, #c9a050 55%, #8f6427)",
                  border: "2px solid rgba(255,253,247,0.55)",
                  transform: isOpening
                    ? "translate(-50%, -50%) scale(0.5)"
                    : "translate(-50%, -50%) scale(1)",
                  opacity: isOpening ? 0 : 1,
                  transition: "all 0.5s ease",
                  animation: isOpening
                    ? "none"
                    : "sealPulse 2.4s ease-in-out infinite",
                }}
              >
                <Typography
                  sx={{
                    color: "#fffdf7",
                    fontFamily: scriptFamily,
                    fontSize: { xs: "1.4rem", sm: "1.8rem" },
                    lineHeight: 1,
                    textShadow: "0 1px 2px rgba(84,55,21,0.5)",
                  }}
                >
                  D&B
                </Typography>
              </Box>
            </Box>

            <Stack
              alignItems="center"
              spacing={1.5}
              sx={{
                opacity: isOpening ? 0 : 1,
                transition: "opacity 0.5s ease",
              }}
            >
              <Button
                onClick={startInvitation}
                variant="contained"
                sx={{
                  bgcolor: "primary.main",
                  boxShadow: "0 14px 32px rgba(143,100,39,0.28)",
                  fontFamily: "'Trebuchet MS', sans-serif",
                  px: 4,
                  py: 1.35,

                  "&:hover": {
                    bgcolor: "#9f742d",
                  },
                }}
              >
                Open Invitation
              </Button>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontFamily: "'Trebuchet MS', sans-serif",
                  fontSize: "0.72rem",
                  opacity: 0.8,
                }}
              >
                ♪ Music will begin when you open the invitation
              </Typography>
            </Stack>
          </Stack>
        </Box>
      )}

      {isOpened && (
        <>
          <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />

          <BackToTop />

          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              py: { xs: 4, md: 7 },
            }}
          >
            <Box
              sx={{
                minHeight: "94vh",
                display: "grid",
                alignItems: "center",
                gap: { xs: 5, md: 8 },
              }}
            >
              {/* HERO */}
              <Paper
                className="floral-frame"
                elevation={0}
                sx={{
                  px: { xs: 3, sm: 6, md: 10 },
                  py: { xs: 7, md: 10 },
                  background:
                    "linear-gradient(150deg, rgba(255,253,247,0.98), rgba(247,230,181,0.72))",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-40%",
                    width: "25%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                    transform: "skewX(-18deg)",
                    animation: "heroShimmer 2.2s ease-out 0.4s forwards",
                    pointerEvents: "none",
                  },

                  "@keyframes heroShimmer": {
                    from: {
                      left: "-40%",
                    },
                    to: {
                      left: "125%",
                    },
                  },
                }}
              >
                <Stack alignItems="center" spacing={{ xs: 3, md: 4 }}>
                  <Chip
                    label="Wedding Celebration"
                    sx={{
                      bgcolor: "rgba(40,66,56,0.09)",
                      border: "1px solid rgba(40,66,56,0.18)",
                      color: "secondary.main",
                      fontFamily: "'Trebuchet MS', sans-serif",
                      letterSpacing: 1.6,
                      px: 1.5,
                      textTransform: "uppercase",
                    }}
                  />

                  <Box className="gold-line" />

                  <Typography
                    component="p"
                    sx={{
                      color: "text.secondary",
                      fontFamily: serifFamily,
                      fontSize: { xs: "0.85rem", md: "1rem" },
                      letterSpacing: { xs: 4, md: 6 },
                      textTransform: "uppercase",
                    }}
                  >
                    Together with their families
                  </Typography>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      component="h1"
                      sx={{
                        ...goldText,
                        fontFamily: scriptFamily,
                        fontSize: { xs: "4.2rem", sm: "6rem", md: "8.5rem" },
                        lineHeight: 1.2,
                      }}
                    >
                      Dennison
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                        my: { xs: 0.5, md: 1 },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 40, md: 90 },
                          height: 1,
                          bgcolor: "primary.main",
                          opacity: 0.5,
                        }}
                      />

                      <Typography
                        component="span"
                        sx={{
                          color: "primary.main",
                          fontFamily: serifFamily,
                          fontStyle: "italic",
                          fontSize: { xs: "2rem", md: "3rem" },
                          lineHeight: 1,
                        }}
                      >
                        &
                      </Typography>

                      <Box
                        sx={{
                          width: { xs: 40, md: 90 },
                          height: 1,
                          bgcolor: "primary.main",
                          opacity: 0.5,
                        }}
                      />
                    </Box>

                    <Typography
                      component="span"
                      sx={{
                        ...goldText,
                        fontFamily: scriptFamily,
                        fontSize: { xs: "4.2rem", sm: "6rem", md: "8.5rem" },
                        lineHeight: 1.2,
                      }}
                    >
                      Bernadette
                    </Typography>
                  </Box>

                  <Typography
                    component="h2"
                    sx={{
                      color: "secondary.main",
                      fontFamily: serifFamily,
                      fontWeight: 300,
                      fontStyle: "italic",
                      fontSize: { xs: "1.6rem", sm: "2.1rem", md: "2.6rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    Invites you to celebrate their wedding
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontFamily: "'Trebuchet MS', sans-serif",
                      fontSize: {
                        xs: "1rem",
                        md: "1.15rem",
                      },
                      maxWidth: 620,
                    }}
                  >
                    Join us for a warm, golden morning of vows, family, and
                    celebration.
                  </Typography>

                  <Button
                    href="#details"
                    variant="contained"
                    sx={{
                      bgcolor: "primary.main",
                      boxShadow: "0 14px 32px rgba(143,100,39,0.28)",
                      fontFamily: "'Trebuchet MS', sans-serif",
                      px: 3.5,
                      py: 1.25,

                      "&:hover": {
                        bgcolor: "#9f742d",
                      },
                    }}
                  >
                    View Wedding Details
                  </Button>

                  <Box
                    onClick={scrollToDetails}
                    sx={{
                      mt: 2,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0.25,
                      color: "primary.main",
                      animation: "scrollCue 2s ease-in-out infinite",

                      "@keyframes scrollCue": {
                        "0%, 100%": {
                          transform: "translateY(0)",
                        },
                        "50%": {
                          transform: "translateY(6px)",
                        },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                      }}
                    >
                      Scroll to explore
                    </Typography>

                    <KeyboardArrowDownRounded />
                  </Box>
                </Stack>
              </Paper>

              {/* CEREMONY DETAILS */}
              <Box
                id="details"
                component="section"
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(2, minmax(0, 1fr))",
                  },
                  gap: { xs: 3, md: 4 },
                  alignItems: "stretch",
                  pb: { xs: 5, md: 7 },
                  scrollMarginTop: 30,
                }}
              >
                <ScrollReveal>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "rgba(255,253,247,0.86)",
                      border: "1px solid rgba(185,138,53,0.34)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2.5,
                      height: "100%",
                      p: { xs: 3, sm: 4 },
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <Typography
                      component="p"
                      sx={{
                        color: "primary.main",
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontSize: "0.78rem",
                        letterSpacing: 2,
                        mb: 1.5,
                        textTransform: "uppercase",
                      }}
                    >
                      Ceremony Details
                    </Typography>

                    <Typography
                      component="h2"
                      sx={{
                        color: "secondary.main",
                        fontSize: {
                          xs: "2.4rem",
                          md: "3.5rem",
                        },
                        lineHeight: 1,
                      }}
                    >
                      A champagne-gold gathering in Cainta.
                    </Typography>

                    <Box
                      className="venue-image"
                      role="img"
                      aria-label="The Home of Authentic Laing venue facade"
                      sx={{ flexGrow: 1 }}
                    >
                      <Typography component="span">
                        The Home of Authentic Laing - Cainta
                      </Typography>
                    </Box>
                  </Paper>
                </ScrollReveal>

                <ScrollReveal delay={110}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "rgba(255,253,247,0.86)",
                      border: "1px solid rgba(185,138,53,0.34)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                      p: { xs: 3, sm: 4 },
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <Stack
                      divider={
                        <Divider
                          flexItem
                          sx={{
                            borderColor: "rgba(185,138,53,0.24)",
                          }}
                        />
                      }
                    >
                      {eventDetails.map((detail) => (
                        <Box
                          key={detail.label}
                          sx={{
                            display: "grid",
                            gridTemplateColumns: {
                              xs: "1fr",
                              sm: "130px 1fr",
                            },
                            gap: {
                              xs: 0.75,
                              sm: 3,
                            },
                            py: 2.5,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "primary.main",
                              fontFamily: "'Trebuchet MS', sans-serif",
                              fontSize: "0.78rem",
                              letterSpacing: 1.5,
                              textTransform: "uppercase",
                            }}
                          >
                            {detail.label}
                          </Typography>

                          <Typography
                            sx={{
                              color: "text.primary",
                              fontSize: {
                                xs: "1.35rem",
                                md: "1.65rem",
                              },
                              lineHeight: 1.25,
                            }}
                          >
                            {detail.value}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Button
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        fontFamily: "'Trebuchet MS', sans-serif",
                        mt: 3,
                        px: 3,
                        py: 1.1,

                        "&:hover": {
                          borderColor: "#8f6427",
                          bgcolor: "rgba(185,138,53,0.08)",
                        },
                      }}
                    >
                      Open Venue in Google Maps
                    </Button>
                  </Paper>
                </ScrollReveal>
              </Box>

              <Countdown />

              {/* OUR STORY */}
              <ScrollReveal>
                <Box component="section" sx={{ pb: { xs: 5, md: 7 } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "rgba(255,253,247,0.9)",
                      background:
                        "linear-gradient(150deg, rgba(255,253,247,0.98), rgba(247,230,181,0.62))",
                      border: "1px solid rgba(185,138,53,0.34)",
                      p: { xs: 3, sm: 5, md: 6 },
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      sx={{
                        color: "primary.main",
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontSize: "0.78rem",
                        letterSpacing: 2,
                        mb: 1.5,
                        textTransform: "uppercase",
                      }}
                    >
                      Our Story
                    </Typography>

                    <Typography
                      component="h2"
                      sx={{
                        color: "secondary.main",
                        fontSize: {
                          xs: "2.4rem",
                          md: "4rem",
                        },
                        lineHeight: 1,
                        mb: 3,
                      }}
                    >
                      From classmates to soulmates.
                    </Typography>

                    <Box
                      component="img"
                      src="/our-story.png"
                      alt="Dennison and Bernadette in a pencil sketch portrait"
                      sx={{
                        border: "1px solid rgba(185,138,53,0.36)",
                        boxShadow: "0 22px 62px rgba(84,55,21,0.16)",
                        display: "block",
                        maxWidth: { xs: 260, sm: 320, md: 360 },
                        width: "100%",
                        mx: "auto",
                        mb: 4,
                      }}
                    />

                    <Stack spacing={2} sx={{ maxWidth: 780, mx: "auto" }}>
                      {storyParagraphs.map((paragraph) => (
                        <Typography
                          key={paragraph}
                          sx={{
                            color: "text.secondary",
                            fontFamily: "'Trebuchet MS', sans-serif",
                            fontSize: {
                              xs: "1rem",
                              md: "1.08rem",
                            },
                            lineHeight: 1.9,
                          }}
                        >
                          {paragraph}
                        </Typography>
                      ))}
                    </Stack>

                    <Box
                      sx={{
                        width: 55,
                        height: 1,
                        bgcolor: "primary.main",
                        opacity: 0.5,
                        mx: "auto",
                        mt: 4,
                        mb: 3,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "primary.main",
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontSize: "0.9rem",
                        letterSpacing: 1,
                      }}
                    >
                      Then → Now → Forever 🤍
                    </Typography>
                  </Paper>
                </Box>
              </ScrollReveal>

              {/* PLUTO */}
              <ScrollReveal>
                <Box component="section" sx={{ pb: { xs: 5, md: 7 } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "rgba(255,253,247,0.9)",
                      background:
                        "linear-gradient(150deg, rgba(255,253,247,0.98), rgba(247,230,181,0.62))",
                      border: "1px solid rgba(185,138,53,0.34)",
                      p: { xs: 3, sm: 5, md: 6 },
                    }}
                  >
                    {/* Decorative paw */}
                    <Typography
                      aria-hidden="true"
                      sx={{
                        position: "absolute",
                        right: { xs: -8, md: 20 },
                        top: { xs: 8, md: 18 },
                        fontSize: { xs: "4rem", md: "6rem" },
                        opacity: 0.055,
                        transform: "rotate(18deg)",
                        userSelect: "none",
                      }}
                    >
                      🐾
                    </Typography>

                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: "minmax(260px, 0.8fr) minmax(0, 1.2fr)",
                        },
                        gap: { xs: 4, md: 6 },
                        alignItems: "center",
                      }}
                    >
                      {/* Pluto photo */}
                      <Box
                        sx={{
                          position: "relative",
                          maxWidth: { xs: 300, md: 360 },
                          width: "100%",
                          mx: "auto",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 10,
                            border: "1px solid rgba(185,138,53,0.28)",
                            transform: "rotate(3deg)",
                          }}
                        />

                        <Box
                          component="img"
                          src="/pluto.png"
                          alt="Pluto, Dennison and Bernadette's beloved dog"
                          sx={{
                            position: "relative",
                            display: "block",
                            width: "100%",
                            aspectRatio: "4 / 5",
                            objectFit: "cover",
                            border: "8px solid rgba(255,253,247,0.95)",
                            boxShadow: "0 22px 55px rgba(84,55,21,0.18)",
                          }}
                        />
                      </Box>

                      {/* Pluto story */}
                      <Box
                        sx={{
                          textAlign: {
                            xs: "center",
                            md: "left",
                          },
                        }}
                      >
                        <Typography
                          component="p"
                          sx={{
                            color: "primary.main",
                            fontFamily: "'Trebuchet MS', sans-serif",
                            fontSize: "0.78rem",
                            letterSpacing: 2,
                            mb: 1.5,
                            textTransform: "uppercase",
                          }}
                        >
                          And Then There Was Pluto
                        </Typography>

                        <Typography
                          component="h2"
                          sx={{
                            color: "secondary.main",
                            fontSize: {
                              xs: "2.5rem",
                              md: "4rem",
                            },
                            lineHeight: 1,
                            mb: 2.5,
                          }}
                        >
                          Our little family grew by four paws.
                        </Typography>

                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontFamily: "'Trebuchet MS', sans-serif",
                            fontSize: {
                              xs: "1rem",
                              md: "1.08rem",
                            },
                            lineHeight: 1.9,
                            maxWidth: 650,
                            mx: {
                              xs: "auto",
                              md: 0,
                            },
                          }}
                        >
                          Somewhere along the way, our story became a little
                          bigger — and a lot more playful. Pluto became part of
                          our family, filling our days with laughter, chaos,
                          cuddles, and plenty of unforgettable moments.
                        </Typography>

                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontFamily: "'Trebuchet MS', sans-serif",
                            fontSize: {
                              xs: "1rem",
                              md: "1.08rem",
                            },
                            lineHeight: 1.9,
                            maxWidth: 650,
                            mx: {
                              xs: "auto",
                              md: 0,
                            },
                            mt: 2,
                          }}
                        >
                          So while our wedding day is about two people saying “I
                          do,” it also celebrates the little life we've built
                          together — including our favorite four-legged member
                          of the family.
                        </Typography>

                        <Box
                          sx={{
                            width: 55,
                            height: 1,
                            bgcolor: "primary.main",
                            opacity: 0.5,
                            mt: 3,
                            mb: 2,
                            mx: {
                              xs: "auto",
                              md: 0,
                            },
                          }}
                        />

                        <Typography
                          sx={{
                            color: "primary.main",
                            fontFamily: serifFamily,
                            fontStyle: "italic",
                            fontSize: {
                              xs: "1.15rem",
                              md: "1.3rem",
                            },
                          }}
                        >
                          Our honorary wedding supervisor. 🐾
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </ScrollReveal>

              {/* DRESS CODE */}
              <ScrollReveal>
                <Box
                  id="dress-code"
                  component="section"
                  sx={{ pb: { xs: 5, md: 7 } }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "rgba(255,253,247,0.9)",
                      background:
                        "linear-gradient(150deg, rgba(255,253,247,0.98), rgba(247,230,181,0.62))",
                      border: "1px solid rgba(185,138,53,0.34)",
                      p: { xs: 3, sm: 4, md: 5 },
                    }}
                  >
                    <Stack spacing={3} alignItems="center">
                      <Box
                        sx={{
                          maxWidth: 760,
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          component="p"
                          sx={{
                            color: "primary.main",
                            fontFamily: "'Trebuchet MS', sans-serif",
                            fontSize: "0.78rem",
                            letterSpacing: 2,
                            mb: 1.5,
                            textTransform: "uppercase",
                          }}
                        >
                          Guest Attire
                        </Typography>

                        <Typography
                          component="h2"
                          sx={{
                            color: "secondary.main",
                            fontSize: {
                              xs: "2.4rem",
                              md: "4rem",
                            },
                            lineHeight: 1,
                          }}
                        >
                          Dress Code
                        </Typography>
                      </Box>

                      <Box
                        component="img"
                        src="/dress-code.jpg"
                        alt="Champagne, ivory, beige, and brown wedding dress code inspiration for guests"
                        sx={{
                          border: "1px solid rgba(185,138,53,0.36)",
                          boxShadow: "0 22px 62px rgba(84,55,21,0.16)",
                          display: "block",
                          maxHeight: {
                            xs: "none",
                            md: 980,
                          },
                          maxWidth: 760,
                          objectFit: "contain",
                          width: "100%",
                        }}
                      />
                    </Stack>
                  </Paper>
                </Box>
              </ScrollReveal>

              {/* TIMELINE */}
              <ScrollReveal>
                <Box component="section" sx={{ pb: { xs: 5, md: 7 } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "rgba(255,253,247,0.9)",
                      background:
                        "linear-gradient(150deg, rgba(255,253,247,0.98), rgba(247,230,181,0.62))",
                      border: "1px solid rgba(185,138,53,0.34)",
                      p: { xs: 3, sm: 5, md: 6 },
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        mb: 5,
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{
                          color: "primary.main",
                          fontFamily: "'Trebuchet MS', sans-serif",
                          fontSize: "0.78rem",
                          letterSpacing: 2,
                          mb: 1.5,
                          textTransform: "uppercase",
                        }}
                      >
                        The Day
                      </Typography>

                      <Typography
                        component="h2"
                        sx={{
                          color: "secondary.main",
                          fontSize: {
                            xs: "2.4rem",
                            md: "4rem",
                          },
                          lineHeight: 1,
                        }}
                      >
                        Wedding Timeline
                      </Typography>
                    </Box>

                    <Stack spacing={0}>
                      {timeline.map((item, index) => (
                        <Box
                          key={item.time}
                          sx={{
                            display: "grid",
                            gridTemplateColumns: {
                              xs: "90px 24px 1fr",
                              sm: "120px 30px 1fr",
                            },
                            gap: {
                              xs: 1.5,
                              sm: 2,
                            },
                            minHeight: index === timeline.length - 1 ? 0 : 105,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "primary.main",
                              fontFamily: "'Trebuchet MS', sans-serif",
                              fontSize: {
                                xs: "0.78rem",
                                sm: "0.85rem",
                              },
                              letterSpacing: 1,
                              textAlign: "right",
                              pt: 0.2,
                              fontWeight: 600,
                            }}
                          >
                            {item.time}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                bgcolor: "primary.main",
                                border: "3px solid rgba(255,253,247,0.9)",
                                boxShadow: "0 0 0 1px rgba(185,138,53,0.4)",
                                flexShrink: 0,
                              }}
                            />

                            {index !== timeline.length - 1 && (
                              <Box
                                sx={{
                                  width: 1,
                                  flexGrow: 1,
                                  bgcolor: "rgba(185,138,53,0.28)",
                                  mt: 0.5,
                                }}
                              />
                            )}
                          </Box>

                          <Box sx={{ pb: 4 }}>
                            <Typography
                              component="h3"
                              sx={{
                                color: "text.primary",
                                fontSize: {
                                  xs: "1.2rem",
                                  sm: "1.4rem",
                                },
                                lineHeight: 1.2,
                                mb: 0.8,
                              }}
                            >
                              {item.title}
                            </Typography>

                            <Typography
                              sx={{
                                color: "text.secondary",
                                fontFamily: "'Trebuchet MS', sans-serif",
                                fontSize: {
                                  xs: "0.9rem",
                                  sm: "0.98rem",
                                },
                                lineHeight: 1.6,
                              }}
                            >
                              {item.description}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                  </Paper>
                </Box>
              </ScrollReveal>

              {/* REMINDERS */}
              <ScrollReveal>
                <Box component="section" sx={{ pb: { xs: 5, md: 7 } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "rgba(255,253,247,0.9)",
                      background:
                        "linear-gradient(150deg, rgba(255,253,247,0.96), rgba(247,230,181,0.66))",
                      border: "1px solid rgba(185,138,53,0.34)",
                      color: "text.primary",
                      p: { xs: 3, sm: 5, md: 6 },
                    }}
                  >
                    <Stack spacing={4}>
                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            color: "primary.main",
                            fontFamily: "'Trebuchet MS', sans-serif",
                            fontSize: "0.78rem",
                            letterSpacing: 2,
                            mb: 1.5,
                            textTransform: "uppercase",
                          }}
                        >
                          A Few Important Details 🤍
                        </Typography>

                        <Typography
                          component="h2"
                          sx={{
                            color: "secondary.main",
                            fontSize: {
                              xs: "2.3rem",
                              md: "3.6rem",
                            },
                            lineHeight: 1,
                            mb: 2,
                          }}
                        >
                          This invitation is especially for you.
                        </Typography>

                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontFamily: "'Trebuchet MS', sans-serif",
                            fontSize: {
                              xs: "1rem",
                              md: "1.08rem",
                            },
                            lineHeight: 1.8,
                            maxWidth: 850,
                          }}
                        >
                          As we celebrate our intimate wedding, we have
                          carefully prepared our guest list. If you have
                          received this invitation, it means you are personally
                          invited to celebrate this special day with us. We
                          kindly ask that you do not bring a plus-one, unless
                          specifically indicated on your invitation. We hope you
                          understand that this is a small and intimate
                          celebration with our closest family and friends.
                        </Typography>
                      </Box>

                      <Divider
                        sx={{
                          borderColor: "rgba(185,138,53,0.24)",
                        }}
                      />

                      <Box>
                        <Typography
                          component="h3"
                          sx={{
                            color: "primary.main",
                            fontFamily: "'Trebuchet MS', sans-serif",
                            fontSize: "0.85rem",
                            letterSpacing: 2,
                            mb: 2,
                            textTransform: "uppercase",
                          }}
                        >
                          A Few Reminders
                        </Typography>

                        <Stack
                          component="ul"
                          spacing={1.5}
                          sx={{
                            m: 0,
                            pl: 2.5,
                          }}
                        >
                          {reminders.map((reminder) => (
                            <Typography
                              component="li"
                              key={reminder}
                              sx={{
                                color: "text.secondary",
                                fontFamily: "'Trebuchet MS', sans-serif",
                                fontSize: {
                                  xs: "0.98rem",
                                  md: "1.05rem",
                                },
                                lineHeight: 1.7,
                              }}
                            >
                              {reminder}
                            </Typography>
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
              </ScrollReveal>

              {/* ENTOURAGE */}
              <ScrollReveal>
                <Box component="section" sx={{ pb: { xs: 6, md: 9 } }}>
                  <Stack spacing={4}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        component="p"
                        sx={{
                          color: "primary.main",
                          fontFamily: "'Trebuchet MS', sans-serif",
                          fontSize: "0.78rem",
                          letterSpacing: 2,
                          mb: 1.5,
                          textTransform: "uppercase",
                        }}
                      >
                        Wedding Entourage
                      </Typography>

                      <Typography
                        component="h2"
                        sx={{
                          color: "secondary.main",
                          fontSize: {
                            xs: "2.5rem",
                            md: "4.2rem",
                          },
                          lineHeight: 1,
                        }}
                      >
                        With love and honor.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: "repeat(2, minmax(0, 1fr))",
                        },
                        gap: 2.5,
                      }}
                    >
                      {entourageGroups.map((group) => (
                        <Paper
                          elevation={0}
                          key={group.title}
                          sx={{
                            bgcolor: "rgba(255,253,247,0.86)",
                            border: "1px solid rgba(185,138,53,0.28)",
                            p: {
                              xs: 2.5,
                              sm: 3,
                            },
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            component="h3"
                            sx={{
                              color: "primary.main",
                              fontFamily: "'Trebuchet MS', sans-serif",
                              fontSize: "0.78rem",
                              letterSpacing: 1.5,
                              mb: 1.5,
                              textTransform: "uppercase",
                            }}
                          >
                            {group.title}
                          </Typography>

                          <Stack spacing={0.75}>
                            {group.names.map((name) => (
                              <Typography
                                key={name}
                                sx={{
                                  color: "text.primary",
                                  fontSize: {
                                    xs: "1.25rem",
                                    md: "1.45rem",
                                  },
                                  lineHeight: 1.35,
                                }}
                              >
                                {name}
                              </Typography>
                            ))}
                          </Stack>
                        </Paper>
                      ))}
                    </Box>
                  </Stack>
                </Box>
              </ScrollReveal>

              {/* FOOTER */}
              <Box
                component="footer"
                sx={{
                  textAlign: "center",
                  pb: { xs: 5, md: 7 },
                }}
              >
                <Box
                  sx={{
                    width: 55,
                    height: 1,
                    bgcolor: "primary.main",
                    opacity: 0.45,
                    mx: "auto",
                    mb: 3,
                  }}
                />

                <Typography
                  sx={{
                    color: "primary.main",
                    fontFamily: "'Trebuchet MS', sans-serif",
                    fontSize: "0.82rem",
                    letterSpacing: 1,
                  }}
                >
                  This website was made with love by the Groom 🤍
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontFamily: "'Trebuchet MS', sans-serif",
                    fontSize: "0.7rem",
                    mt: 0.8,
                    letterSpacing: 1.2,
                  }}
                >
                  With Pluto supervising. 🐾
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontFamily: "'Trebuchet MS', sans-serif",
                    fontSize: "0.7rem",
                    mt: 0.8,
                    letterSpacing: 1.2,
                  }}
                >
                  Dennison & Bernadette · 2026
                </Typography>
              </Box>
            </Box>
          </Container>
        </>
      )}
    </Box>
  );
}
