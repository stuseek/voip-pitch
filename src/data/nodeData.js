export const nodeData = {
    "telephony": [
        {
            "name": "Twilio (Cloud)",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Twilio_logo.png",
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
            "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Vonage_Logo.png",
            "realism": 7,
            "latency_ms": 120,
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
            "logo": "https://d1.awsstatic.com/product-marketing/Connect/amazon-connect-logo.png",
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
            "logo": "https://www.plivo.com/assets/images/logos/plivo.svg",
            "realism": 7,
            "latency_ms": 120,
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
            "logo": "https://uploads-ssl.webflow.com/5f7b51964246ff1462b5067e/5f7b51964246ff5f98b50730_telnyx-logo.svg",
            "realism": 7,
            "latency_ms": 120,
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
            "logo": "https://www.cdnlogo.com/logos/a/51/asterisk.svg",
            "realism": 10,
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
            "logo": "https://cloud.google.com/text-to-speech/images/google-cloud-tts-logo.png",
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
            "logo": "https://deepgram.com/wp-content/uploads/2021/08/deepgram-logo.svg",
            "realism": 8,
            "latency_ms": 250,
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
            "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
            "realism": 9,
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
            "logo": "https://azure.microsoft.com/sfassets/img/azure-symbol.svg",
            "realism": 7.5,
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
            "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_Watson_logo.svg",
            "realism": 8,
            "latency_ms": 1200,
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
            "logo": "https://www.cdnlogo.com/logos/o/38/openai.svg",
            "realism": 8,
            "latency_ms": 350,
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
            "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
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
            "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
            "realism": 8,
            "latency_ms": 700,
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
            "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Meta_Logo.png",
            "realism": 7,
            "latency_ms": 1800,
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
            "logo": "https://uploads-ssl.webflow.com/6392d1d842d3c5459d1b10fe/6392d1d842d3c5c1c71b1152_anthropic-logo.svg",
            "realism": 9,
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
            "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            "realism": 10,
            "latency_ms": 0,
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
            "logo": "https://mistral.ai/wp-content/uploads/2023/09/Mistral_Logo.svg",
            "realism": 6,
            "latency_ms": 800,
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
            "name": "ElevenLabs (Cloud)",
            "logo": "https://api.elevenlabs.io/v1/assets/logo.svg",
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
            "logo": "https://d1.awsstatic.com/product-marketing/Polly/polly-logo.png",
            "realism": 8,
            "latency_ms": 1400,
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
            "logo": "https://cloud.google.com/text-to-speech/images/google-cloud-tts-logo.png",
            "realism": 9,
            "latency_ms": 800,
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
            "logo": "https://azure.microsoft.com/sfassets/img/azure-symbol.svg",
            "realism": 8.5,
            "latency_ms": 1500,
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
            "name": "Coqui TTS (On-Prem)",
            "logo": "https://raw.githubusercontent.com/coqui-ai/brand/main/coqui-logo.png",
            "realism": 7,
            "latency_ms": 200,
            "interruptions": "Yes",
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
        },
        {
            "name": "IBM Watson TTS",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_Watson_logo.svg",
            "realism": 8,
            "latency_ms": 1500,
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
        },
        {
            "name": "Offline TTS (On-Prem)",
            "logo": "https://www.cdnlogo.com/logos/c/78/coqui-ai-logo.svg",
            "realism": 6,
            "latency_ms": 400,
            "interruptions": "Yes",
            "cost_per_conversation_min": 0.0005,
            "annual_support_cost": 500,
            "mvp_cost": {
                "devops": 125,
                "qa": 25,
                "manager": 25,
                "backend": 50,
                "ml_engineer": 13
            },
            "full_implementation_cost": {
                "devops": 250,
                "qa": 75,
                "manager": 50,
                "backend": 150,
                "ml_engineer": 38
            },
            "type": "on-prem"
        }
    ]
};