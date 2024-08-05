import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildGetInformationsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 592;

	public infoType: number = 0;

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
        this.deserializeAs_GuildGetInformationsMessage(input);
    }

    private deserializeAs_GuildGetInformationsMessage(input: ICustomDataInput)
    {
        this._infoTypeFunc(input);
    }

    private _infoTypeFunc(input: ICustomDataInput)
    {
        this.infoType = input.readByte();
        if(this.infoType < 0)
        {
            throw new Error("Forbidden value (" + this.infoType + ") on element of GuildGetInformationsMessage.infoType.");
        }
    }

}