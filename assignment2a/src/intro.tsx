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
                My name is {name2}, and I like to collect Pokemon TCG.     
            </p>
        </div>
    );
}

export default Intro;