'use client'

import { useState } from "react";
// import { Link } from "react-router-dom";
import NationalityPage from "./components/check-nationality";
// import Navigation from "@/components/Navigation";

export default function FindIdPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [step, setStep] = useState(1)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Find ID attempt:", { name, phone });
    };

    return (
        <>
            <NationalityPage />
        </>
    );
}