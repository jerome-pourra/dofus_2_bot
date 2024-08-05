import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildCharacsUpgradeRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 237;

	public charaTypeTarget: number = 0;

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
        this.deserializeAs_GuildCharacsUpgradeRequestMessage(input);
    }

    private deserializeAs_GuildCharacsUpgradeRequestMessage(input: ICustomDataInput)
    {
        this._charaTypeTargetFunc(input);
    }

    private _charaTypeTargetFunc(input: ICustomDataInput)
    {
        this.charaTypeTarget = input.readByte();
        if(this.charaTypeTarget < 0)
        {
            throw new Error("Forbidden value (" + this.charaTypeTarget + ") on element of GuildCharacsUpgradeRequestMessage.charaTypeTarget.");
        }
    }

}