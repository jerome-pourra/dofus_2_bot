import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class NpcGenericActionRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6670;

	public npcId: number = 0;
	public npcActionId: number = 0;
	public npcMapId: number = 0;

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
        this.deserializeAs_NpcGenericActionRequestMessage(input);
    }

    private deserializeAs_NpcGenericActionRequestMessage(input: ICustomDataInput)
    {
        this._npcIdFunc(input);
        this._npcActionIdFunc(input);
        this._npcMapIdFunc(input);
    }

    private _npcIdFunc(input: ICustomDataInput)
    {
        this.npcId = input.readInt();
    }

    private _npcActionIdFunc(input: ICustomDataInput)
    {
        this.npcActionId = input.readByte();
        if(this.npcActionId < 0)
        {
            throw new Error("Forbidden value (" + this.npcActionId + ") on element of NpcGenericActionRequestMessage.npcActionId.");
        }
    }

    private _npcMapIdFunc(input: ICustomDataInput)
    {
        this.npcMapId = input.readDouble();
        if(this.npcMapId < 0 || this.npcMapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.npcMapId + ") on element of NpcGenericActionRequestMessage.npcMapId.");
        }
    }

}