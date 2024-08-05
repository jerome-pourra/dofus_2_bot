import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class NpcDialogCreationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3289;

	public mapId: number = 0;
	public npcId: number = 0;

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
        this.deserializeAs_NpcDialogCreationMessage(input);
    }

    private deserializeAs_NpcDialogCreationMessage(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
        this._npcIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of NpcDialogCreationMessage.mapId.");
        }
    }

    private _npcIdFunc(input: ICustomDataInput)
    {
        this.npcId = input.readInt();
    }

}