import { Uuid } from "./../../types/game/Uuid";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class AdminCommandMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9773;

	public messageUuid: Uuid;
	public content: string = "";

    public constructor()
    {
        super();
        this.messageUuid = new Uuid();
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
        this.deserializeAs_AdminCommandMessage(input);
    }

    private deserializeAs_AdminCommandMessage(input: ICustomDataInput)
    {
        this.messageUuid = new Uuid();
        this.messageUuid.deserialize(input);
        this._contentFunc(input);
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

}