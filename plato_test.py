import asyncio

from app.agent.manus import Manus
from app.logger import logger


async def main():
    # Create and initialize Manus agent
    agent = await Manus.create()
    try:
        # prompt = input("Enter your prompt: ")
        prompt = "Compose a fictional dialogue in the style of Plato, written as if during his golden age. The dialogue should explore the philosophical theme of the absurd, using the classical structure and tone of his works. Choose a title that follows the convention of Plato’s dialogues — naming the text after the central interlocutor. This character’s name should subtly reflect the theme of the absurd (e.g., as 'Philebus' reflects pleasure/youth). Use historically appropriate characters, settings (such as the Athenian agora), and dialectical progression. Ensure the structure mirrors authentic Platonic dialogues, including an introduction, progressive questioning, shifts in tone, and a clear dialectical resolution or open-ended philosophical conclusion. The work should be of reasonable length — enough to fully develop the argument. Save the final output as a Markdown (.md) inside  /home/zhuo/OpenManus/output"  # "Make a new folder for this conversation inside  /home/zhuo/OpenManus/output and save the final output as a Markdown (.md) inside that folder"

        if not prompt.strip():
            logger.warning("Empty prompt provided.")
            return

        logger.warning("Processing your request...")
        await agent.run(prompt)
        logger.info("Request processing completed.")
    except KeyboardInterrupt:
        logger.warning("Operation interrupted.")
    finally:
        # Ensure agent resources are cleaned up before exiting
        await agent.cleanup()


if __name__ == "__main__":
    asyncio.run(main())
