import { SocialEmblem } from "./../../../types/game/social/SocialEmblem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceCreationValidMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5413;

	public allianceName: string = "";
	public allianceTag: string = "";
	public allianceEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.allianceEmblem = new SocialEmblem();
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
        this.deserializeAs_AllianceCreationValidMessage(input);
    }

    private deserializeAs_AllianceCreationValidMessage(input: ICustomDataInput)
    {
        this._allianceNameFunc(input);
        this._allianceTagFunc(input);
        this.allianceEmblem = new SocialEmblem();
        this.allianceEmblem.deserialize(input);
    }

    private _allianceNameFunc(input: ICustomDataInput)
    {
        this.allianceName = input.readUTF();
    }

    private _allianceTagFunc(input: ICustomDataInput)
    {
        this.allianceTag = input.readUTF();
    }

}