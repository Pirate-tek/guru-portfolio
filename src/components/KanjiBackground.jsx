import React, { useEffect, useState } from 'react';
import './KanjiBackground.css';

const KANJI_LIST = [
    "夢", "心", "風", "空", "道", "光", "影", "海", "花", "愛", "力", "和", "静", "舞", "流", "魂", "神", "声", "深", "雲", "時", "森", "夜", "希望", "永", "火", "水", "気", "空", "雪", "雨"
];

const KanjiBackground = () => {
    const [kanjiElements, setKanjiElements] = useState([]);

    useEffect(() => {
        const spawnKanji = () => {
            const id = Date.now() + Math.random();
            const char = KANJI_LIST[Math.floor(Math.random() * KANJI_LIST.length)];
            const left = Math.random() * 100; // 0% to 100%
            const duration = 10 + Math.random() * 15; // 10s to 25s
            const size = 28 + Math.random() * 62; // 28px to 90px
            const rotation = (Math.random() - 0.5) * 12; // -6deg to 6deg
            const swayDistance = (Math.random() - 0.5) * 100 + 'px'; // -50px to 50px

            // Color variations
            const rand = Math.random();
            let color = 'var(--color-sumi)';
            let opacity = 0.06 + Math.random() * 0.03; // 6% to 9%

            if (rand > 0.95) {
                color = 'var(--color-sakura)'; // Rare Sakura
                opacity = 0.03 + Math.random() * 0.02;
            } else if (rand > 0.90) {
                color = 'var(--color-matcha)'; // Rare Matcha
                opacity = 0.03 + Math.random() * 0.02;
            }

            const newKanji = {
                id,
                char,
                style: {
                    left: `${left}%`,
                    fontSize: `${size}px`,
                    animationName: 'fall',
                    animationDuration: `${duration}s`,
                    animationTimingFunction: 'linear',
                    '--target-opacity': opacity,
                    '--rotation': `${rotation}deg`,
                    '--sway-distance': swayDistance,
                    color: color,
                }
            };

            setKanjiElements(prev => [...prev, newKanji]);

            // Remove after animation completes
            setTimeout(() => {
                setKanjiElements(prev => prev.filter(k => k.id !== id));
            }, duration * 1000);
        };

        // Initial spawn
        for (let i = 0; i < 10; i++) {
            setTimeout(spawnKanji, Math.random() * 5000);
        }

        // Continuous spawn
        const interval = setInterval(spawnKanji, 800); // Spawn every 800ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="kanji-background">
            {kanjiElements.map(kanji => (
                <div
                    key={kanji.id}
                    className="kanji-char"
                    style={kanji.style}
                >
                    {kanji.char}
                </div>
            ))}
        </div>
    );
};

export default KanjiBackground;
