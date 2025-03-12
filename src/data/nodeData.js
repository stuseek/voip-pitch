// This file contains the data for all available components/nodes in the AI Phone Assistant
// Each node has information about its performance, cost, and characteristics

export const nodeData = {
    telephony: [
        {
            name: "Twilio (Cloud)",
            logo: "https://www.cdnlogo.com/logos/t/77/twilio.svg",
            realism: 10,
            latency_ms: 50,
            interruptions: "Yes",
            cost_per_conversation_min: 0.015,
            annual_support_cost: 0,
            mvp_cost: 0,
            full_implementation_cost: 5000,
            type: "cloud"
        },
        {
            name: "On-Prem PBX (Asterisk)",
            logo: "https://www.cdnlogo.com/logos/a/51/asterisk.svg",
            realism: 10,
            latency_ms: 30,
            interruptions: "Yes",
            cost_per_conversation_min: 0.005,
            annual_support_cost: 2000,
            mvp_cost: 10000,
            full_implementation_cost: 20000,
            type: "on-prem"
        }
    ],
    stt: [
        {
            name: "Google Cloud STT",
            logo: "https://www.cdnlogo.com/logos/g/35/google-icon.svg",
            realism: 9,
            latency_ms: 200,
            interruptions: "Partial results streaming",
            cost_per_conversation_min: 0.025,
            annual_support_cost: 0,
            mvp_cost: 0,
            full_implementation_cost: 0,
            type: "cloud"
        },
        {
            name: "Deepgram (Cloud)",
            logo: "https://assets-global.website-files.com/62a1de6c31916a303c9c1161/65d8be33e3c6b26bb0b86f09_Deepgram_Logo.svg",
            realism: 9,
            latency_ms: 150,
            interruptions: "Partial results streaming",
            cost_per_conversation_min: 0.020,
            annual_support_cost: 0,
            mvp_cost: 0,
            full_implementation_cost: 0,
            type: "cloud"
        },
        {
            name: "Whisper (On-Prem)",
            logo: "https://www.cdnlogo.com/logos/o/38/openai.svg",
            realism: 8,
            latency_ms: 300,
            interruptions: "Yes (with VAD)",
            cost_per_conversation_min: 0.001,
            annual_support_cost: 1000,
            mvp_cost: 5000,
            full_implementation_cost: 10000,
            type: "on-prem"
        }
    ],
    llm: [
        {
            name: "OpenAI GPT-4 (Cloud)",
            logo: "https://www.cdnlogo.com/logos/o/38/openai.svg",
            realism: 10,
            latency_ms: 500,
            interruptions: "N/A",
            cost_per_conversation_min: 0.050,
            annual_support_cost: 0,
            mvp_cost: 0,
            full_implementation_cost: 0,
            type: "cloud"
        },
        {
            name: "OpenAI GPT-3.5 (Cloud)",
            logo: "https://www.cdnlogo.com/logos/o/38/openai.svg",
            realism: 8,
            latency_ms: 300,
            interruptions: "N/A",
            cost_per_conversation_min: 0.005,
            annual_support_cost: 0,
            mvp_cost: 0,
            full_implementation_cost: 0,
            type: "cloud"
        },
        {
            name: "LLaMA-2 13B (On-Prem)",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Meta-Logo.png/1200px-Meta-Logo.png",
            realism: 7,
            latency_ms: 400,
            interruptions: "N/A",
            cost_per_conversation_min: 0.0005,
            annual_support_cost: 3000,
            mvp_cost: 15000,
            full_implementation_cost: 30000,
            type: "on-prem"
        }
    ],
    tts: [
        {
            name: "ElevenLabs (Cloud)",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Elevenlabs_logo.svg",
            realism: 10,
            latency_ms: 250,
            interruptions: "Can cut off speech",
            cost_per_conversation_min: 0.010,
            annual_support_cost: 0,
            mvp_cost: 0,
            full_implementation_cost: 0,
            type: "cloud"
        },
        {
            name: "AWS Polly (Cloud)",
            logo: "https://www.cdnlogo.com/logos/a/19/aws.svg",
            realism: 8,
            latency_ms: 200,
            interruptions: "Can cut off speech",
            cost_per_conversation_min: 0.005,
            annual_support_cost: 0,
            mvp_cost: 0,
            full_implementation_cost: 0,
            type: "cloud"
        },
        {
            name: "Offline TTS (On-Prem)",
            logo: "https://www.cdnlogo.com/logos/c/78/coqui-ai-logo.svg",
            realism: 6,
            latency_ms: 100,
            interruptions: "Yes",
            cost_per_conversation_min: 0.0005,
            annual_support_cost: 500,
            mvp_cost: 2000,
            full_implementation_cost: 5000,
            type: "on-prem"
        }
    ]
};