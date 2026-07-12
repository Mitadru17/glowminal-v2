import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
  Section,
} from '@react-email/components'
import * as React from 'react'

interface FounderNotificationProps {
  email: string
  source: string
  timestamp: string
}

export const FounderNotification = ({ email, source, timestamp }: FounderNotificationProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Waitlist Signup: {email}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[20px] font-normal text-center p-0 my-[30px] mx-0">
              New Waitlist Signup 🎉
            </Heading>
            
            <Section className="bg-[#fafafa] rounded p-[16px] border border-solid border-[#eaeaea]">
              <Text className="text-black text-[14px] leading-[24px] m-0 mb-[8px]">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-black text-[14px] leading-[24px] m-0 mb-[8px]">
                <strong>Source:</strong> {source}
              </Text>
              <Text className="text-black text-[14px] leading-[24px] m-0">
                <strong>Time:</strong> {timestamp}
              </Text>
            </Section>
            
            <Text className="text-[#666666] text-[12px] leading-[24px] mt-[32px] text-center">
              Sent via Glowminal System
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default FounderNotification
