import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class NpcDialogCreationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3289;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public mapId: number = 0;
	public npcId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NpcDialogCreationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NpcDialogCreationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NpcDialogCreationMessage.endpointServer;
    }

    public initNpcDialogCreationMessage(mapId: number = 0, npcId: number = 0): NpcDialogCreationMessage
    {
        this.mapId = mapId;
        this.npcId = npcId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_NpcDialogCreationMessage(output);
    }

    public serializeAs_NpcDialogCreationMessage(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        output.writeInt(this.npcId);
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