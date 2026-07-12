import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Tailwind,
  Section,
  Hr
} from '@react-email/components'
import * as React from 'react'

interface WaitlistWelcomeProps {
  email: string
}

export const WaitlistWelcome = ({ email }: WaitlistWelcomeProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the future of explainable skin intelligence.</Preview>
      <Tailwind>
        <Body className="bg-[#0A0A0A] my-auto mx-auto font-sans text-white">
          <Container className="border border-solid border-[#333333] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[16px]">
              {/* Replace with actual Glowminal logo URL when hosted */}
              <Heading className="text-white text-[24px] font-normal text-center p-0 my-[16px] mx-0 italic font-serif">
                Glowminal
              </Heading>
            </Section>
            
            <Heading className="text-white text-[20px] font-normal text-center p-0 my-[30px] mx-0">
              You're officially on the list.
            </Heading>
            
            <Text className="text-[#a1a1aa] text-[14px] leading-[24px]">
              Hi there,
            </Text>
            
            <Text className="text-[#a1a1aa] text-[14px] leading-[24px]">
              Thank you for joining the Glowminal early access waitlist. We are building the future of explainable skin intelligence—moving beyond guesswork into scientific computer vision, longitudinal tracking, and personalized routines.
            </Text>
            
            <Text className="text-[#a1a1aa] text-[14px] leading-[24px]">
              We are currently finalizing our proprietary ML models and conducting early clinical evaluations. As a waitlist member, you'll be among the first to experience the platform when we open our doors.
            </Text>
            
            <Section className="text-center mt-[32px] mb-[32px]">
              <Link
                href="https://glowminal.tech"
                className="bg-[#047857] text-white rounded text-[12px] font-semibold no-underline text-center px-5 py-3"
              >
                Return to Glowminal
              </Link>
            </Section>
            
            <Hr className="border border-solid border-[#333333] my-[26px] mx-0 w-full" />
            
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was sent to {email}. If you didn't request this, you can safely ignore this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WaitlistWelcome
