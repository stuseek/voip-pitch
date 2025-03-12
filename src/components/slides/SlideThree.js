import React from 'react';
import { AlertTriangle } from 'lucide-react';

const SlideThree = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-6">HIPAA Compliance Considerations</h2>

            <div className="bg-yellow-50 p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start">
                    <AlertTriangle className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                        <h3 className="text-xl font-semibold text-yellow-700">Important</h3>
                        <p>If the AI assistant will handle healthcare-related calls or other sensitive information, ensuring HIPAA compliance is mandatory.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Secure Data Handling</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>All voice recordings, transcriptions, and stored conversation logs containing patient info must be encrypted in transit and at rest.</li>
                        <li>Avoid storing sensitive data long-term; only keep call records for the minimum necessary timeframe.</li>
                        <li>Purge or anonymize data when no longer needed to minimize risk in case of data breaches.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">HIPAA-Compliant Services</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Any cloud services integrated should be HIPAA-compliant or covered under a Business Associate Agreement (BAA).</li>
                        <li>Major providers like AWS, Google Cloud, and Azure offer HIPAA-eligible services.</li>
                        <li>If using cloud speech API, ensure the provider will sign a BAA and not use data for any purpose outside the service.</li>
                        <li>If such guarantees aren't available, an on-premises solution might be required.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Authentication & Audit</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Log access and actions in a secure, auditable way.</li>
                        <li>Authenticate securely when accessing patient records.</li>
                        <li>Track all access to maintain compliance.</li>
                        <li>Regularly audit who accessed call data and when.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Privacy by Design</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Build the system so that it defaults to privacy.</li>
                        <li>Do not include actual patient identifiers in logs or analytics; use tokens or redact sensitive details.</li>
                        <li>Provide mechanisms to consent if any call recordings are used for improvement/training.</li>
                        <li>Ensure all processes comply with HIPAA.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">On-Premise Preference</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Consider on-prem deployment of sensitive components if there's high concern about data leaving premises.</li>
                        <li>Route audio through an on-site server for transcription and LLM processing so PHI never goes to an external cloud.</li>
                        <li>This connects to the on-prem vs. cloud decision from a compliance perspective.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Backup and Disaster Recovery</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Back up any stored data in a HIPAA-compliant manner.</li>
                        <li>Have a plan for system outages – perhaps failover to a human operator if the AI system goes down.</li>
                        <li>Avoid losing calls which could be critical in healthcare situations.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">Compliance Summary</h3>
                <p>By addressing these points, the solution can confidently operate within healthcare or other regulated industries. The aim is to minimize risk and ensure patient data confidentiality while still leveraging powerful AI services.</p>
                <p className="mt-2 font-semibold">Our on-premises solutions offer the highest level of HIPAA compliance, while cloud solutions require careful vendor selection and legal agreements.</p>
            </div>
        </div>
    );
};

export default SlideThree;