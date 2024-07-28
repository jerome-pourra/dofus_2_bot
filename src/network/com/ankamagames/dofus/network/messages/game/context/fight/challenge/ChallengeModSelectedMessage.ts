import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeModSelectedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4667;

	public challengeMod: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeModSelectedMessage(input);
    }

    private deserializeAs_ChallengeModSelectedMessage(input: ICustomDataInput)
    {
        this._challengeModFunc(input);
    }

    private _challengeModFunc(input: ICustomDataInput)
    {
        this.challengeMod = input.readByte();
        if(this.challengeMod < 0)
        {
            throw new Error("Forbidden value (" + this.challengeMod + ") on element of ChallengeModSelectedMessage.challengeMod.");
        }
    }

}