export const nodeData = {
    "telephony": [
        {
            "name": "Twilio (Cloud)",
            "logo": "https://cdn.icon-icons.com/icons2/2699/PNG/512/twilio_logo_icon_169441.png",
            "realism": 7,
            "latency_ms": 120,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.01,
            "annual_support_cost": 3000,
            "mvp_cost": {
                "devops": 25,
                "qa": 13,
                "manager": 13,
                "backend": 25,
                "ml_engineer": 0
            },
            "full_implementation_cost": {
                "devops": 100,
                "qa": 50,
                "manager": 25,
                "backend": 75,
                "ml_engineer": 25
            },
            "type": "cloud"
        },
        {
            "name": "Vonage (Nexmo)",
            "logo": "https://cdn.worldvectorlogo.com/logos/vonage-logo.svg",
            "realism": 6.5,
            "latency_ms": 110,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.01,
            "annual_support_cost": 2000,
            "mvp_cost": {
                "devops": 20,
                "qa": 13,
                "manager": 13,
                "backend": 20,
                "ml_engineer": 0
            },
            "full_implementation_cost": {
                "devops": 75,
                "qa": 38,
                "manager": 25,
                "backend": 63,
                "ml_engineer": 13
            },
            "type": "cloud"
        },
        {
            "name": "Amazon Connect",
            "logo": "https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png",
            "realism": 7,
            "latency_ms": 150,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.02,
            "annual_support_cost": 1200,
            "mvp_cost": {
                "devops": 30,
                "qa": 15,
                "manager": 13,
                "backend": 25,
                "ml_engineer": 5
            },
            "full_implementation_cost": {
                "devops": 100,
                "qa": 45,
                "manager": 25,
                "backend": 75,
                "ml_engineer": 25
            },
            "type": "cloud"
        },
        {
            "name": "Plivo",
            "logo": "https://cdn.worldvectorlogo.com/logos/plivo.svg",
            "realism": 6,
            "latency_ms": 90,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.005,
            "annual_support_cost": 1000,
            "mvp_cost": {
                "devops": 20,
                "qa": 13,
                "manager": 13,
                "backend": 20,
                "ml_engineer": 0
            },
            "full_implementation_cost": {
                "devops": 63,
                "qa": 38,
                "manager": 25,
                "backend": 63,
                "ml_engineer": 13
            },
            "type": "cloud"
        },
        {
            "name": "Telnyx",
            "logo": "https://cdn.worldvectorlogo.com/logos/telnyx.svg",
            "realism": 6.5,
            "latency_ms": 100,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.007,
            "annual_support_cost": 1000,
            "mvp_cost": {
                "devops": 20,
                "qa": 10,
                "manager": 13,
                "backend": 20,
                "ml_engineer": 0
            },
            "full_implementation_cost": {
                "devops": 63,
                "qa": 38,
                "manager": 25,
                "backend": 63,
                "ml_engineer": 13
            },
            "type": "cloud"
        },
        {
            "name": "On-Prem PBX (Asterisk)",
            "logo": "https://cdn.worldvectorlogo.com/logos/asterisk-1.svg",
            "realism": 9,
            "latency_ms": 40,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.005,
            "annual_support_cost": 2000,
            "mvp_cost": {
                "devops": 100,
                "qa": 25,
                "manager": 25,
                "backend": 75,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 250,
                "qa": 75,
                "manager": 50,
                "backend": 175,
                "ml_engineer": 38
            },
            "type": "on-prem"
        }
    ],
    "stt": [
        {
            "name": "Google Cloud STT",
            "logo": "https://cdn.icon-icons.com/icons2/2699/PNG/512/google_cloud_logo_icon_171058.png",
            "realism": 7,
            "latency_ms": 700,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.024,
            "annual_support_cost": 1500,
            "mvp_cost": {
                "devops": 20,
                "qa": 15,
                "manager": 13,
                "backend": 25,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 75,
                "qa": 50,
                "manager": 25,
                "backend": 75,
                "ml_engineer": 38
            },
            "type": "cloud"
        },
        {
            "name": "Deepgram (Cloud)",
            "logo": "https://cdn.worldvectorlogo.com/logos/deepgram.svg",
            "realism": 7.5,
            "latency_ms": 200,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.0045,
            "annual_support_cost": 0,
            "mvp_cost": {
                "devops": 15,
                "qa": 10,
                "manager": 10,
                "backend": 20,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 63,
                "qa": 38,
                "manager": 25,
                "backend": 63,
                "ml_engineer": 38
            },
            "type": "cloud"
        },
        {
            "name": "OpenAI Whisper",
            "logo": "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
            "realism": 8.5,
            "latency_ms": 600,
            "interruptions": "Partial",
            "cost_per_conversation_min": 0.006,
            "annual_support_cost": 0,
            "mvp_cost": {
                "devops": 13,
                "qa": 8,
                "manager": 8,
                "backend": 20,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 50,
                "qa": 25,
                "manager": 20,
                "backend": 63,
                "ml_engineer": 38
            },
            "type": "cloud"
        },
        {
            "name": "Azure Speech-to-Text",
            "logo": "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
            "realism": 7,
            "latency_ms": 800,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.0167,
            "annual_support_cost": 1200,
            "mvp_cost": {
                "devops": 20,
                "qa": 13,
                "manager": 13,
                "backend": 20,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 75,
                "qa": 38,
                "manager": 25,
                "backend": 63,
                "ml_engineer": 38
            },
            "type": "cloud"
        },
        {
            "name": "IBM Watson STT",
            "logo": "https://cdn.worldvectorlogo.com/logos/ibm-watson-logo.svg",
            "realism": 7.5,
            "latency_ms": 1000,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.02,
            "annual_support_cost": 1000,
            "mvp_cost": {
                "devops": 20,
                "qa": 13,
                "manager": 13,
                "backend": 20,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 75,
                "qa": 38,
                "manager": 25,
                "backend": 63,
                "ml_engineer": 25
            },
            "type": "cloud"
        },
        {
            "name": "Whisper (On-Prem)",
            "logo": "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
            "realism": 4,
            "latency_ms": 120,
            "interruptions": "Yes (with VAD)",
            "cost_per_conversation_min": 0.001,
            "annual_support_cost": 1000,
            "mvp_cost": {
                "devops": 63,
                "qa": 25,
                "manager": 13,
                "backend": 50,
                "ml_engineer": 38
            },
            "full_implementation_cost": {
                "devops": 150,
                "qa": 63,
                "manager": 38,
                "backend": 125,
                "ml_engineer": 75
            },
            "type": "on-prem"
        }
    ],
    "llm": [
        {
            "name": "OpenAI GPT-4 (Cloud)",
            "logo": "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
            "realism": 10,
            "latency_ms": 1500,
            "interruptions": "Partial (stream)",
            "cost_per_conversation_min": 0.009,
            "annual_support_cost": 0,
            "mvp_cost": {
                "devops": 13,
                "qa": 13,
                "manager": 13,
                "backend": 20,
                "ml_engineer": 20
            },
            "full_implementation_cost": {
                "devops": 63,
                "qa": 38,
                "manager": 25,
                "backend": 63,
                "ml_engineer": 50
            },
            "type": "cloud"
        },
        {
            "name": "OpenAI GPT-3.5 (Cloud)",
            "logo": "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
            "realism": 5,
            "latency_ms": 450,
            "interruptions": "Partial (stream)",
            "cost_per_conversation_min": 0.0005,
            "annual_support_cost": 0,
            "mvp_cost": {
                "devops": 13,
                "qa": 8,
                "manager": 8,
                "backend": 20,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 50,
                "qa": 25,
                "manager": 20,
                "backend": 63,
                "ml_engineer": 38
            },
            "type": "cloud"
        },
        {
            "name": "LLaMA-2 13B (On-Prem)",
            "logo": "https://cdn.worldvectorlogo.com/logos/meta-1.svg",
            "realism": 5,
            "latency_ms": 800,
            "interruptions": "N/A",
            "cost_per_conversation_min": 0,
            "annual_support_cost": 3000,
            "mvp_cost": {
                "devops": 125,
                "qa": 38,
                "manager": 25,
                "backend": 75,
                "ml_engineer": 75
            },
            "full_implementation_cost": {
                "devops": 300,
                "qa": 100,
                "manager": 50,
                "backend": 200,
                "ml_engineer": 150
            },
            "type": "on-prem"
        },
        {
            "name": "Anthropic Claude",
            "logo": "https://cdn.worldvectorlogo.com/logos/anthropic.svg",
            "realism": 5,
            "latency_ms": 800,
            "interruptions": "Partial (stream)",
            "cost_per_conversation_min": 0.001,
            "annual_support_cost": 0,
            "mvp_cost": {
                "devops": 15,
                "qa": 10,
                "manager": 8,
                "backend": 20,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 63,
                "qa": 38,
                "manager": 20,
                "backend": 63,
                "ml_engineer": 38
            },
            "type": "cloud"
        },
        {
            "name": "Google Gemini",
            "logo": "https://cdn.worldvectorlogo.com/logos/google-logo-2022.svg",
            "realism": 5,
            "latency_ms": 400,
            "interruptions": "N/A",
            "cost_per_conversation_min": 0,
            "annual_support_cost": 0,
            "mvp_cost": {
                "devops": 13,
                "qa": 8,
                "manager": 8,
                "backend": 13,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 50,
                "qa": 25,
                "manager": 20,
                "backend": 50,
                "ml_engineer": 38
            },
            "type": "cloud"
        },
        {
            "name": "Mistral 7B",
            "logo": "https://cdn.worldvectorlogo.com/logos/mistral-ai.svg",
            "realism": 5,
            "latency_ms": 250,
            "interruptions": "N/A",
            "cost_per_conversation_min": 0,
            "annual_support_cost": 0,
            "mvp_cost": {
                "devops": 50,
                "qa": 20,
                "manager": 13,
                "backend": 25,
                "ml_engineer": 25
            },
            "full_implementation_cost": {
                "devops": 125,
                "qa": 63,
                "manager": 25,
                "backend": 75,
                "ml_engineer": 63
            },
            "type": "on-prem"
        }
    ],
    "tts": [
        {
            "name": "Dialog 1 (On-Prem)",
            "logo": "https://cdn.worldvectorlogo.com/logos/play-button-4.svg",
            "realism": 9,
            "latency_ms": 100,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.001,
            "annual_support_cost": 2000,
            "mvp_cost": {
                "devops": 40,
                "qa": 20,
                "manager": 15,
                "backend": 30,
                "ml_engineer": 25
            },
            "full_implementation_cost": {
                "devops": 100,
                "qa": 50,
                "manager": 30,
                "backend": 80,
                "ml_engineer": 60
            },
            "type": "on-prem"
        },
        {
            "name": "ElevenLabs (Cloud)",
            "logo": "https://cdn.worldvectorlogo.com/logos/elevenlabs.svg",
            "realism": 9,
            "latency_ms": 1300,
            "interruptions": "Partial (user can stop audio)",
            "cost_per_conversation_min": 0.004,
            "annual_support_cost": 0,
            "mvp_cost": {
                "devops": 13,
                "qa": 8,
                "manager": 8,
                "backend": 13,
                "ml_engineer": 0
            },
            "full_implementation_cost": {
                "devops": 50,
                "qa": 25,
                "manager": 20,
                "backend": 50,
                "ml_engineer": 13
            },
            "type": "cloud"
        },
        {
            "name": "AWS Polly (Cloud)",
            "logo": "https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png",
            "realism": 7,
            "latency_ms": 500,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.0008,
            "annual_support_cost": 100,
            "mvp_cost": {
                "devops": 13,
                "qa": 8,
                "manager": 8,
                "backend": 13,
                "ml_engineer": 0
            },
            "full_implementation_cost": {
                "devops": 50,
                "qa": 25,
                "manager": 20,
                "backend": 38,
                "ml_engineer": 13
            },
            "type": "cloud"
        },
        {
            "name": "Google Cloud TTS",
            "logo": "https://cdn.icon-icons.com/icons2/2699/PNG/512/google_cloud_logo_icon_171058.png",
            "realism": 8.5,
            "latency_ms": 600,
            "interruptions": "Partial (streamed audio)",
            "cost_per_conversation_min": 0.0008,
            "annual_support_cost": 150,
            "mvp_cost": {
                "devops": 13,
                "qa": 8,
                "manager": 8,
                "backend": 13,
                "ml_engineer": 0
            },
            "full_implementation_cost": {
                "devops": 50,
                "qa": 25,
                "manager": 20,
                "backend": 38,
                "ml_engineer": 13
            },
            "type": "cloud"
        },
        {
            "name": "Microsoft Azure Neural TTS",
            "logo": "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
            "realism": 8,
            "latency_ms": 700,
            "interruptions": "Partial (sdk streaming)",
            "cost_per_conversation_min": 0.0008,
            "annual_support_cost": 1200,
            "mvp_cost": {
                "devops": 15,
                "qa": 10,
                "manager": 8,
                "backend": 15,
                "ml_engineer": 5
            },
            "full_implementation_cost": {
                "devops": 63,
                "qa": 38,
                "manager": 25,
                "backend": 50,
                "ml_engineer": 25
            },
            "type": "cloud"
        },
        {
            "name": "IBM Watson TTS",
            "logo": "https://cdn.worldvectorlogo.com/logos/ibm-watson-logo.svg",
            "realism": 7.5,
            "latency_ms": 800,
            "interruptions": "Partial",
            "cost_per_conversation_min": 0.02,
            "annual_support_cost": 1000,
            "mvp_cost": {
                "devops": 13,
                "qa": 8,
                "manager": 8,
                "backend": 13,
                "ml_engineer": 0
            },
            "full_implementation_cost": {
                "devops": 50,
                "qa": 25,
                "manager": 20,
                "backend": 38,
                "ml_engineer": 13
            },
            "type": "cloud"
        }
    ]
};