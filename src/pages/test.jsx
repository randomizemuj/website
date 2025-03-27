"use client"

import { motion, useScroll } from "motion/react"
import { useRef } from "react"

function Item() {
    const ref = useRef(null);
    const navHeight = 10;
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end-${navHeight}px", "start start-${navHeight}px"],
    })

    return (
        <section style={itemContainer}>
            <div ref={ref} style={item}>
                <figure style={progressIconContainer}>
                    <svg
                        style={progressIcon}
                        width="75"
                        height="75"
                        viewBox="0 0 100 100"
                    >
                        <circle
                            style={progressIconBg}
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="bg"
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            style={{
                                ...progressIconIndicator,
                                pathLength: scrollYProgress,
                            }}
                        />
                    </svg>
                </figure>
            </div>
        </section>
    )
}

export default function TrackElementWithinViewport() {
    return (
        <>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </>
    )
}

/**
 * ==============   Styles   ================
 */

const itemContainer = {
    height: "100vh",
    maxHeight: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const progressIconContainer = {
    position: "sticky",
    top: 0,
    width: 80,
    height: 80,
    margin: 0,
    padding: 0,
}

const processCircle = {
    strokeDashoffset: 0,
    strokeWidth: 5,
    fill: "none",
}

const progressIcon = {
    ...processCircle,
    transform: "translateX(-100px) rotate(-90deg)",
    stroke: "#ff0088",
}

const progressIconIndicator = {
    ...processCircle,
    strokeDashoffset: 0,
    strokeWidth: 5,
    fill: "none",
}

const progressIconBg = {
    opacity: 0.2,
}

const item = {
    width: 200,
    height: 250,
    border: "2px dotted #ff0088",
    position: "relative",
}
