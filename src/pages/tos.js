import React from "react";
import {useEffect, useContext} from "react";  
import { UserContext } from "../utils/context";

function TOS() {
  const { setCurrentPath} = useContext(UserContext);

  useEffect(() => {
    setCurrentPath("/tos/");
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="m-3">
          <h4 className="card-header" >Introduction and Acceptance of Terms</h4>
          <p className="card-body" >
            Welcome to Bottomless Vault Banking! These Terms of Service
            ("Terms") govern your use of our banking services, website, mobile
            applications, and any other related services provided by Bottomless
            Vault Banking (referred to as "we," "us," or "our"). By accessing or
            using our services, you acknowledge that you have read, understood,
            and agree to be bound by these Terms. If you do not agree to these
            Terms, please refrain from using our services. Your continued use of
            our services constitutes your acceptance of these Terms. These Terms
            outline the terms and conditions that govern your use of our
            services and establish the legal agreement between you and
            Bottomless Vault Banking. Please read these Terms carefully before
            accessing or using our services. If you have any questions or
            concerns regarding these Terms, please contact our customer support
            team. These Terms may be updated or modified from time to time, and
            it is your responsibility to review and familiarize yourself with
            any changes. Your continued use of our services after any
            modifications to these Terms will constitute your acceptance of the
            updated Terms. Please note that these Terms are in addition to any
            specific agreements or policies that may apply to specific services
            or features within our banking services. In the event of any
            inconsistency between these Terms and any additional agreements or
            policies, the specific terms of the additional agreements or
            policies will prevail. Thank you for choosing Bottomless Vault
            Banking. We are committed to providing you with secure, reliable,
            and exceptional banking services. If you have any questions or
            require further clarification, please do not hesitate to reach out
            to our customer support team.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Account Registration and Security</h4>
          <p className="card-body" >
            To access and utilize our services, you may be required to create an
            account with Bottomless Vault Banking. During the account
            registration process, you must provide accurate, complete, and
            up-to-date information as requested. You are responsible for
            maintaining the confidentiality of your account credentials,
            including your username and password. You agree to: Provide accurate
            and truthful information during the registration process. Maintain
            the security and confidentiality of your account credentials.
            Promptly notify us if you suspect any unauthorized access to or use
            of your account. Be solely responsible for any activities or actions
            performed through your account. Ensure that your contact information
            is current and accurate at all times. Bottomless Vault Banking
            reserves the right to suspend, terminate, or restrict your access to
            our services if we have reasonable grounds to believe that you have
            provided inaccurate, incomplete, or misleading information or if you
            have violated these Terms or any applicable laws or regulations. You
            acknowledge and understand that Bottomless Vault Banking will never
            ask you to provide your account credentials or personal information
            through unsolicited emails, phone calls, or any other means of
            communication. It is essential to remain vigilant and report any
            suspicious or fraudulent activities to our customer support team. We
            prioritize the security and protection of your personal information.
            Please refer to our Privacy Policy for detailed information on how
            we collect, use, and safeguard your data. By creating an account
            with Bottomless Vault Banking, you affirm that you are at least 18
            years old or of legal age in your jurisdiction to enter into binding
            agreements. If you are creating an account on behalf of a business
            entity, you represent and warrant that you have the authority to
            bind the entity to these Terms. We are committed to maintaining the
            security and privacy of your account. Should you have any concerns
            or encounter any issues regarding your account or account security,
            please contact our customer support team immediately.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Use of Services</h4>
          <p className="card-body" >
            By accessing and using the services provided by Bottomless Vault
            Banking, you agree to abide by the following terms and conditions:
            Eligibility: You must be eligible to use our services in compliance
            with applicable laws and regulations. Our services may not be
            available in certain jurisdictions, and we reserve the right to
            restrict or deny access to our services at our discretion.
            Compliance with Laws: You agree to use our services in compliance
            with all applicable laws, regulations, and industry standards. You
            are solely responsible for ensuring that your use of our services
            does not violate any legal obligations or infringe upon the rights
            of others. Authorized Use: You may only use our services for lawful
            purposes and in accordance with these Terms. You are prohibited from
            engaging in any activities that may disrupt or interfere with the
            proper functioning of our services, including but not limited to
            hacking, transmitting malware, or engaging in any fraudulent or
            unauthorized activities. Intellectual Property: The content, design,
            logos, trademarks, and other intellectual property associated with
            Bottomless Vault Banking are owned by us or our licensors. You agree
            not to use, reproduce, modify, or distribute our intellectual
            property without our prior written consent. Prohibited Conduct: You
            are prohibited from engaging in any conduct that is unlawful,
            offensive, harmful, or violates the rights of others. This includes
            but is not limited to harassment, defamation, spamming, or engaging
            in any illegal activities through our services. Communication: You
            acknowledge and agree that Bottomless Vault Banking may send you
            important communications, such as service announcements and account
            updates, via email, SMS, or other means of communication. It is your
            responsibility to ensure that your contact information is accurate
            and up to date. Third-Party Services: Our services may include links
            or integrations to third-party websites or services. These
            third-party services are not under our control, and we are not
            responsible for their content, privacy practices, or any damages or
            losses incurred through your use of such services. Your interactions
            with third-party services are solely between you and the respective
            third party. Termination: We reserve the right to suspend, restrict,
            or terminate your access to our services at any time and for any
            reason, without prior notice. Upon termination, you must cease all
            use of our services and any associated materials or information. By
            using our services, you acknowledge and agree to comply with these
            terms and conditions. Failure to adhere to these terms may result in
            the suspension or termination of your access to our services, and
            you may be held liable for any damages or losses incurred as a
            result of your non-compliance. If you have any questions or concerns
            about the use of our services, please contact our customer support
            team for assistance.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Privacy and Data Protection</h4>
          <p className="card-body" >
            Bottomless Vault Banking respects intellectual property rights and
            expects its users to do the same. This section outlines our policy
            regarding intellectual property and the rights of content owners:
            Ownership of Content: Bottomless Vault Banking retains all rights,
            title, and interest in and to its services, including all
            intellectual property rights. This includes the design, layout,
            graphics, logos, and other visual elements of our website and
            applications. User-Generated Content: By using our services, you
            agree not to infringe upon the intellectual property rights of
            others. You are solely responsible for any content you upload, post,
            or share through our services, and you represent and warrant that
            you have the necessary rights to do so. Reporting Copyright
            Infringement: If you believe that your copyrighted work has been
            infringed upon through our services, please notify us in writing and
            provide the following information: (a) a description of the
            copyrighted work and the alleged infringement; (b) your contact
            information; (c) a statement that you have a good-faith belief that
            the use of the material is not authorized by the copyright owner;
            and (d) a statement, made under penalty of perjury, that the
            information provided is accurate and that you are the copyright
            owner or authorized to act on behalf of the copyright owner. Removal
            of Infringing Content: Upon receipt of a valid copyright
            infringement notice, we will promptly investigate and take
            appropriate action, which may include removing or disabling access
            to the allegedly infringing content. Intellectual Property Disputes:
            Bottomless Vault Banking is not responsible for resolving disputes
            between users or third parties regarding intellectual property
            rights. If you believe that your intellectual property rights have
            been violated by another user, we encourage you to contact the
            relevant party directly and seek legal advice if necessary.
            Bottomless Vault Banking respects intellectual property rights and
            expects its users to do the same. If you have any questions or
            concerns regarding intellectual property or the use of copyrighted
            material, please contact our customer support team for assistance.
            Please note that this section does not constitute legal advice, and
            it is your responsibility to ensure compliance with applicable
            intellectual property laws and regulations.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Intellectual Property Rights</h4>
          <p className="card-body" >
            Bottomless Vault Banking values intellectual property rights and
            expects its users to do the same. This section outlines the
            intellectual property rights associated with our services and sets
            guidelines for your use: Ownership: All content, trademarks, logos,
            graphics, and other materials available through our services are the
            property of Bottomless Vault Banking or our licensors. These
            intellectual property rights are protected by copyright laws and
            other applicable intellectual property laws. Limited License: We
            grant you a limited, non-exclusive, non-transferable license to
            access and use our services and the associated intellectual property
            for personal and non-commercial purposes, strictly in accordance
            with these Terms. Restrictions: You are expressly prohibited from:
            Copying, modifying, or distributing any content from our services
            without prior written consent. Using our trademarks, logos, or other
            branding elements without our explicit permission. Creating
            derivative works or attempting to reverse engineer, decompile, or
            disassemble any aspect of our services. Using our services in a
            manner that infringes upon the intellectual property rights of
            Bottomless Vault Banking or any third party. User Content: By
            submitting any content through our services, including feedback,
            suggestions, or ideas, you grant Bottomless Vault Banking a
            worldwide, royalty-free, perpetual, irrevocable, and sublicensable
            right to use, reproduce, modify, adapt, publish, and distribute that
            content. Reporting Infringements: If you believe that your
            intellectual property rights have been infringed upon through our
            services, please contact us with the necessary information so that
            we may investigate and take appropriate action. User Compliance: As
            a user of our services, you are responsible for ensuring that your
            use of the services does not violate the intellectual property
            rights of others. You must respect all applicable laws and
            regulations regarding intellectual property. Bottomless Vault
            Banking reserves all rights not expressly granted in these Terms.
            Any unauthorized use of our intellectual property may result in
            civil and/or criminal penalties. We actively monitor and protect our
            intellectual property rights and will take appropriate legal action
            against any infringement. If you have any questions or concerns
            regarding intellectual property rights or need to report any
            infringements, please contact our customer support team for
            assistance.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Prohibited Activities</h4>
          <p className="card-body" >
            To maintain a safe and respectful environment for all users,
            Bottomless Vault Banking prohibits certain activities when using our
            services. This section outlines the activities that are strictly
            prohibited: Fraud and Unauthorized Use: You are prohibited from
            engaging in any fraudulent or unauthorized activities, including but
            not limited to identity theft, forgery, impersonation, or accessing
            accounts or information without proper authorization. Malicious
            Actions: Any attempt to disrupt, damage, or interfere with the
            proper functioning of our services or the systems and networks
            supporting them is strictly prohibited. This includes introducing
            malware, viruses, or any other harmful code. Unlawful Use: You must
            not use our services for any illegal or unlawful purposes. This
            includes but is not limited to money laundering, terrorist
            financing, drug trafficking, or any other activity that violates
            applicable laws or regulations. Harassment and Offensive Content:
            You are prohibited from engaging in any form of harassment,
            bullying, or posting offensive or discriminatory content through our
            services. This includes content that is defamatory, hateful, or
            infringes upon the rights of others. Spam and Unsolicited
            Communications: Sending unsolicited communications, including spam,
            chain letters, or phishing attempts, through our services is
            strictly prohibited. Intellectual Property Infringement: You must
            respect the intellectual property rights of others and refrain from
            using our services to infringe upon or violate any copyrights,
            trademarks, or other proprietary rights. Violation of Privacy: Any
            unauthorized collection, use, or disclosure of personal information
            of other users or individuals through our services is strictly
            prohibited. Violation of Terms: You must comply with these Terms of
            Service and any additional terms or policies provided by Bottomless
            Vault Banking. Violation of these terms may result in the
            termination of your access to our services. Bottomless Vault Banking
            reserves the right to investigate and take appropriate action
            against any user found to be engaged in prohibited activities. This
            may include suspending or terminating your access to our services,
            reporting illegal activities to the relevant authorities, and
            seeking legal remedies. We encourage all users to report any
            suspected prohibited activities or violations of these Terms. If you
            have any questions or concerns regarding prohibited activities,
            please contact our customer support team for assistance.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Third-Party Links and Services</h4>
          <p className="card-body" >
            Bottomless Vault Banking may provide links to third-party websites,
            applications, or services for your convenience or to enhance your
            banking experience. However, we do not endorse or assume any
            responsibility for the content, privacy practices, or activities of
            these third-party entities. This section outlines important
            considerations when accessing third-party links or using their
            services: Third-Party Websites and Services: Our services may
            contain links or references to websites, applications, or services
            that are not operated or controlled by Bottomless Vault Banking.
            These links are provided solely for informational purposes and do
            not imply any endorsement or affiliation. Responsibility for
            Third-Party Interactions: Your interactions with any third-party
            websites, applications, or services, including the use of their
            products or services, are solely between you and the respective
            third party. Bottomless Vault Banking is not responsible for any
            damages, losses, or liabilities incurred as a result of your
            interactions or transactions with these third parties. Third-Party
            Privacy Policies: We encourage you to review the privacy policies
            and terms of service of any third-party websites or services that
            you access through our services. These policies govern the
            collection, use, and disclosure of your information by those third
            parties and may differ from our own practices. Security Risks:
            Accessing third-party links or using their services may involve
            certain security risks. It is your responsibility to ensure that you
            take appropriate precautions and exercise caution when interacting
            with third parties online. Indemnification: You agree to indemnify
            and hold Bottomless Vault Banking harmless from any claims, damages,
            or losses arising out of or related to your use of any third-party
            websites, applications, or services. We encourage you to exercise
            discretion and use your best judgment when accessing third-party
            links or using their services. If you encounter any issues or have
            concerns regarding third-party interactions, please contact our
            customer support team for assistance. Please note that this section
            does not apply to any third-party services that are specifically
            provided by Bottomless Vault Banking as part of our banking
            services, such as payment processors or identity verification
            services. The use of such services is governed by separate
            agreements and policies.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Fees, Charges, and Billing</h4>
          <p className="card-body" >
            While Bottomless Vault Banking strives to provide accurate and
            reliable information, we cannot guarantee the completeness,
            accuracy, or reliability of our services at all times. This section
            outlines the limitations of liability regarding your use of our
            services: Service Availability: We make reasonable efforts to ensure
            that our services are available and functioning properly. However,
            we do not guarantee uninterrupted, timely, or error-free access to
            our services. We may need to temporarily suspend or restrict access
            to our services for maintenance, upgrades, or other reasons beyond
            our control. Content Accuracy: The information provided through our
            services is for general informational purposes only and should not
            be considered as financial, legal, or professional advice. We do not
            warrant the accuracy, completeness, or reliability of any
            information, materials, or content provided through our services.
            Third-Party Content and Services: Our services may include content
            or services provided by third parties, such as advertisements or
            links to external websites. We do not endorse or assume
            responsibility for the accuracy, legality, or quality of such
            third-party content or services. User Conduct: Bottomless Vault
            Banking is not responsible for the actions, conduct, or content
            posted by users through our services. We do not endorse or assume
            liability for any user-generated content or interactions between
            users. Limitation of Liability: To the fullest extent permitted by
            applicable laws, Bottomless Vault Banking and its affiliates,
            directors, employees, agents, or partners shall not be liable for
            any direct, indirect, incidental, consequential, or punitive damages
            arising out of or in connection with your use of our services.
            Indemnification: You agree to indemnify and hold Bottomless Vault
            Banking harmless from any claims, damages, losses, or liabilities
            arising out of or related to your use of our services, your
            violation of these Terms, or your infringement of any rights of
            third parties. Some jurisdictions do not allow the exclusion or
            limitation of certain types of liability, so the above limitations
            may not fully apply to you. In such cases, our liability will be
            limited to the maximum extent permitted by applicable laws. If you
            have any concerns or questions regarding the limitations of
            liability, please contact our customer support team for
            clarification.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Termination and Account Closure</h4>
          <p className="card-body" >
            Bottomless Vault Banking reserves the right to suspend, terminate,
            or close your account if you violate these Terms of Service or
            engage in any prohibited activities. This section outlines the
            procedures and implications regarding account termination:
            Termination by You: You may choose to terminate your account at any
            time by contacting our customer support team and requesting the
            closure of your account. Upon account closure, you may no longer
            have access to certain features or services provided by Bottomless
            Vault Banking. Termination by Bottomless Vault Banking: We may
            suspend, terminate, or close your account if we believe that you
            have violated these Terms, engaged in fraudulent activities, or
            posed a risk to the security or integrity of our services. We will
            make reasonable efforts to provide notice prior to termination,
            except in cases where immediate termination is necessary for legal,
            security, or operational reasons. Effect of Account Closure: Upon
            termination or closure of your account, you will no longer have
            access to your account information, transaction history, or any
            other data associated with your account. Any remaining balances or
            funds in your account may be subject to applicable laws and
            regulations regarding account closure and funds disposal. Survival
            of Obligations: The termination or closure of your account does not
            relieve you of any obligations or liabilities that have accrued
            prior to such termination. You remain responsible for any
            outstanding fees, charges, or other obligations incurred through
            your use of our services. Bottomless Vault Banking reserves the
            right to take appropriate legal action, including seeking damages
            and injunctive relief, in response to any violations of these Terms
            or applicable laws. If you have any questions or concerns regarding
            account termination or closure, please contact our customer support
            team for assistance.
          </p>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
export default TOS;
