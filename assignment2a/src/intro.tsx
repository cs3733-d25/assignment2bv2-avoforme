type IntroProps = {
    name1: string;
    name2: string;
};

function Intro({ name1, name2 }: IntroProps) {
    return (
        <div>
            <p>
                My name is {name1}, and I like to play Minecraft.
            </p>

            <p>
                {name2}     
            </p>
        </div>
    );
}

export default Intro;